type midi_note = int
type midi_data = int list

type midi_input = <
  on_midi_message : unit -> unit
> Js.t

type midi_output = <
  send : midi_data -> float -> unit [@bs.meth];
  on_midi_message : unit -> unit [@bs.meth]
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

external request_access : unit -> midi_access Js.Promise.t =
  "requestMidiAccess" [@@bs.val][@@bs.scope "window", "navigator"]

let note_on = 9
let note_off = 8

let note_on_channel channel =
  (note_on lsl 4) + channel

let note_off_channel channel =
  (note_off lsl 4) + channel

let send_step (output : midi_output) (step : Step.step) =
  let status_byte_on = note_on_channel step.channel in
  let midi_note = (step.octave * 12) + (Step.note_to_index step.note) in
  let midi_data_on = [status_byte_on; midi_note; step.velocity] in
  let status_byte_off = note_off_channel step.channel in
  let midi_data_off = [status_byte_on; midi_note; 0] in (
    output##send midi_data_on step.time;
    output##send midi_data_off (step.time +. step.length)
  )