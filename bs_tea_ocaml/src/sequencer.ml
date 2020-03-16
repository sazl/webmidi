type t = {
  mutable bpm : int;
  mutable increment : float;
  mutable timer_lookahead : float;
  mutable next_note_time : float;
  mutable current_index : int;
  mutable step : int;
  mutable sequencer_worker : WebWorkers.webWorker;
  mutable is_running : bool;

  mutable midi_inputs : Midi.midi_input_map option;
  mutable midi_outputs : Midi.midi_output_map option;
  mutable audio_context : Webaudio.audio_context option;
  sequence_buffer : (Step.step option) Vector.t;
}

let get_option x =
  match x with
  | Some y -> y
  | _ -> raise (Failure "no option value")

let current_sequencer: t option ref = ref None
let default_buffer_size = 16

let increment_step t = (
  t.current_index <- (t.current_index + 1) mod (Vector.length t.sequence_buffer);
  t.increment <- 60.0 /. float_of_int t.bpm;
  t.next_note_time <- t.next_note_time +. 0.25 *. t.increment
)

let is_next_note_ready t =
  t.next_note_time < (Webaudio.get_current_time (get_option t.audio_context)) +. t.timer_lookahead /. 1000.0 &&
  Vector.is_empty t.sequence_buffer

let play_step t (step : Step.step) =
  let midi_data = Midi.step_to_midi step in
  Midi.send t.next_note_time midi_data

let play_sequence_step t =
  if is_next_note_ready t
  then (
    let step = Vector.pop t.sequence_buffer in
    match step with
    | Some s -> play_step t s
    | None -> ();
    increment_step t
  )

let on_sequencer_event event =
  let seq = get_option !current_sequencer in
  let data: Worker.message = WebWorkers.MessageEvent.data(event) in
  if data.action == "tick"
  then play_sequence_step seq

let init_worker () =
  let worker = WebWorkers.create_webworker "worker.bs.js" in
  let message: Worker.message = { action = "set_interval"; interval = 0.0 } in (
    WebWorkers.postMessage worker message;
    WebWorkers.onMessage worker on_sequencer_event;
  )

let init_midi t =
  let on_midi_success (midi_access: Midi.midi_access) =
    let inputs = midi_access##inputs in
    let outputs = midi_access##outputs in
      t.midi_inputs <- Some inputs;
      t.midi_outputs <- Some outputs;
      Js.Promise.resolve ()
  in
  let on_midi_failure _ =
    Js.log("Could not access your MIDI device");
    Js.Promise.resolve ()
  in
    Midi.request_access ()
    |> Js.Promise.then_ on_midi_success
    |> Js.Promise.catch on_midi_failure

let init () =
  let default_sequencer: t = {
    bpm = 0;
    increment = 0.0;
    timer_lookahead = 0.0;
    next_note_time = 0.0;
    current_index = 0;
    step = 0;
    is_running = false;
    midi_inputs = None;
    midi_outputs = None;
    audio_context = None;
    sequencer_worker = WebWorkers.create_webworker "worker.bs.js";
    sequence_buffer = Vector.make default_buffer_size ~dummy: None;
  } in (
    current_sequencer := Some default_sequencer;
    init_worker ();
    init_midi default_sequencer;
    default_sequencer
  )

let stop_sequence t = (
  WebWorkers.postMessage t.sequencer_worker "stop";
  t.is_running <- false;
  t
)

let start_sequence t =
  if t.is_running
  then t
  else (
    stop_sequence t;
    let audio_context = Webaudio.create_audio_context () in (
      t.audio_context <- Some audio_context;
      t.next_note_time <- Webaudio.get_current_time audio_context;
      WebWorkers.postMessage t.sequencer_worker "start";
      t.is_running <- true;
      t
    )
  )

let clear_sequence t = (
  Vector.clear t.sequence_buffer;
  t
)
