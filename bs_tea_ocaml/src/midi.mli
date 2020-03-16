type midi_note
type midi_data

type midi_input_map
type midi_output_map

type midi_access = <
  sysex_enabled : bool;
  inputs : midi_input_map;
  outputs : midi_output_map
> Js.t

val request_access : unit -> midi_access Js.Promise.t
val step_to_midi : Step.step -> midi_data
val send : float -> midi_data -> unit
