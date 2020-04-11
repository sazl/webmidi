type midi_note
type midi_data

type midi_input
type midi_output

type midi_input_map
type midi_output_map

type midi_access

val request_access : unit -> midi_access Js.Promise.t
val send_step : midi_output -> Step.step -> unit
