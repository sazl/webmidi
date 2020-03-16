type midi_note = int
type midi_data = int list

type midi_input = <
  on_midi_message : unit -> unit
> Js.t

type midi_output = <
  on_midi_message : unit -> unit
> Js.t

type midi_input_map = <
  inputs : midi_input Js.Dict.t;
  get : string -> midi_input
> Js.t

type midi_output_map = <
  outputs : midi_output Js.Dict.t;
  get : string -> midi_output
> Js.t

type midi_access = <
  sysex_enabled : bool;
  inputs : midi_input_map;
  outputs : midi_output_map
> Js.t

external request_access : unit -> midi_access Js.Promise.t = "requestMidiAccess" [@@bs.val][@@bs.scope "window", "navigator"]

let note_on = 9
let note_off = 8

let note_on_channel channel =
  (note_on lsl 4) + channel

let step_to_midi (step : Step.step) =
  let status_byte = note_on_channel step.channel in
  let midi_note = (step.octave * 12) + (Step.note_to_index step.note) in
  let midi_data = [status_byte; midi_note; step.velocity] in
  midi_data

let send next_note_time data =
  ()
