type midi_note
type midi_data

val step_to_midi : Step.step -> midi_data
val send : float -> midi_data -> unit
