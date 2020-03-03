type midi_note
type midi_data
type midi_access
type midi_input_map
type midi_output_map

val request_access : unit -> unit
val step_to_midi : Step.step -> midi_data
val send : float -> midi_data -> unit
