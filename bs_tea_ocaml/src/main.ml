open Tea.App
open Tea.Html

type state = {
  sequencer : Sequencer.t;
  is_running : bool
}

type msg =
  | StartSequencer
  | StopSequencer
  [@@bs.deriving {accessors}]

let init () =
  let canvas = Canvas.get_canvas "sequencer-canvas" in {
    sequencer = Sequencer.init ();
    is_running = false
  }

let update model = function
  | StartSequencer ->
    let sequencer = Sequencer.start_sequence model.sequencer in
    { is_running = sequencer.is_running; sequencer = sequencer }
  | StopSequencer ->
    let sequencer = Sequencer.stop_sequence model.sequencer in
    { is_running = sequencer.is_running; sequencer = sequencer }

let view_button title msg =
  button
    [ onClick msg
    ]
    [ text title
    ]

let view_midi_inputs model =
  div
    []
    [
      text model.sequencer.midi_inputs
    ]

let view model =
  let is_running = model.sequencer.is_running in
  div
    []
    [
      view_button "start" StartSequencer;
      view_button "stop" StopSequencer;
      span [] [text (if is_running then "running" else "stopped")]
    ]

let main =
  beginnerProgram {
    model = init ();
    update;
    view;
  }
