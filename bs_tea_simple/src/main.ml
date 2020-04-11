
let audio_context : (Webaudio.audio_context option) ref = ref None
let sequencer_canvas : (Canvas.canvas option) ref = ref None
let sequencer_canvas_context : (Canvas.context option) ref = ref None
let unlocked = ref false
let is_playing = ref false
let start_time = ref 0.0
let current_16th_note = ref 0
let tempo = ref 10.0
let lookahead = 25.0
let schedule_ahead_time = ref 0.1
let next_note_time = ref 0.0
let note_resolution = ref 0
let note_length = ref 0.05
let sequence_length = 4
let last_16th_note_drawn = ref (-1)
let current_midi_output : Midi.midi_output option ref = ref None

let steps_in_queue : Step.step Vector.t =
  let default_step : Step.step = {
    index = 0;
    octave = 0;
    note = NoteA;
    velocity = 0;
    channel = 1;
    time = 0.0;
    length = 1.0;
  }
  in Vector.make 0 ~dummy: default_step

let worker : (WebWorkers.webWorker option) ref = ref None

let get_current_audio_time () =
  let ctx : Webaudio.audio_context = Utils.get_exn !audio_context
  in Webaudio.get_current_time ctx

let rec draw () =
  let current_note_index : int ref = ref !last_16th_note_drawn in
  let current_time = get_current_audio_time () in (
    while (Vector.length steps_in_queue) > 0 && (Vector.topl steps_in_queue).time < current_time do
      let step = Vector.popl steps_in_queue in
      let index = step.index in
      current_note_index := index
    done;

    if !last_16th_note_drawn != !current_note_index
    then (
      let canvas : Canvas.canvas = Utils.get_exn !sequencer_canvas in
      let context = Utils.get_exn !sequencer_canvas_context in
      let x = canvas.width / 18 in
      Canvas.clear_rect context 0 0 canvas.width canvas.height;
      for i = 0 to sequence_length - 1 do
        let color = if !current_note_index == i then "red" else "black" in
        Js.log4 "draw step: index: " i " color: " color;
        Canvas.fill_style_set context color;
        Canvas.fill_rect context (x*(i+1)) x (x/2) (x/2);
        let v = x + (x/4) in
        let h = (x*(i+1)) in
        Canvas.font_set context "24px Monospace";
        Canvas.fill_style_set context "white";
        Canvas.fill_text context (string_of_int i) h v
      done
    );

    Canvas.request_animation_frame draw
  )

let play_midi_step step =
  let output = Utils.get_exn !current_midi_output
  in Midi.send_step output step

let schedule_note current_note next_note_time =
  let step : Step.step = {
    index = current_note;
    octave = 0;
    note = Step.NoteA;
    velocity = 0;
    channel = 1;
    time = next_note_time;
    length = !note_length;
  } in (
  Js.log3 "scheduling note" step steps_in_queue;
  Vector.push steps_in_queue step;
  (* play_midi_step step *)
)

let next_note () =
  let seconds_per_beat = 60.0 /. !tempo in (
    next_note_time := !next_note_time +. (0.25 *. seconds_per_beat);
    current_16th_note := !current_16th_note + 1;
    if !current_16th_note == sequence_length
    then (
      current_16th_note := 0
    )
  )

let rec scheduler () =
  let current_time = get_current_audio_time () in
  Js.log4 "scheduler: next_note_time" !next_note_time " current_16_note: " current_time;
  while !next_note_time < (current_time +. !schedule_ahead_time) do
    schedule_note !current_16th_note !next_note_time;
    next_note ();
  done

let onMessage (e : WebWorkers.MessageEvent.t) =
    let data : Worker.message = WebWorkers.MessageEvent.data(e) in
    if data.action == "tick"
    then scheduler ()
    else ()

let init_sequencer () =
  let canvas = Canvas.get_canvas "sequencer" in
  let context = Canvas.get_context canvas "2d" in
  let audioctx = Webaudio.create_audio_context () in
    Js.log "Created web audio context";
    audio_context := Some audioctx;
    sequencer_canvas := Some canvas;
    sequencer_canvas_context := Some context;
    Canvas.request_animation_frame draw;
  let wrkr = WebWorkers.create_webworker "worker.bs.js" in
  let message : Worker.message = { action = "set-interval"; interval = lookahead } in
    Js.log "Starting web worker";
    worker := Some wrkr;
    WebWorkers.onMessage wrkr onMessage;
    WebWorkers.postMessage wrkr message

let play () =
  let wrkr = Utils.get_exn !worker in
  is_playing := not !is_playing;
  if !is_playing
  then (
    let start_message : Worker.message = { action = "start"; interval = 0.0 } in
    let current_time = get_current_audio_time () in
    current_16th_note := 0;
    next_note_time := current_time;
    WebWorkers.postMessage wrkr start_message
  )
  else (
    Js.log "stopping worker";
    let stop_message : Worker.message = { action = "stop"; interval = 0.0 } in
    WebWorkers.postMessage wrkr stop_message
  )

(* ----------------------------------------------------------- *)

open Tea.App
open Tea.Html

type state = {
  is_running : bool
}

type msg =
  | StartSequencer
  | StopSequencer
  [@@bs.deriving {accessors}]

let update _ = function
  | StartSequencer -> (
    init_sequencer ();
    play ()
  )
  | StopSequencer -> (
    play ()
  )

let init () = ()

let view _ =
  div
    [
      class' "main"
    ]
    [
      canvas
        [
          id "sequencer";
          Vdom.prop "width" "1920";
          Vdom.prop "height" "300"
        ]
        []
      ;
      button
        [
          class' "start";
          onClick StartSequencer
        ]
        [
          text "start"
        ]
      ;
       button
        [
          class' "stop";
          onClick StopSequencer
        ]
        [
          text "stop"
        ]
    ]

let main =
  beginnerProgram {
    model = init ();
    view = view;
    update = update;
  }