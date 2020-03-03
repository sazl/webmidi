type midi_note = int
type midi_data = int list

external request_access : unit -> unit = "requestMidiAccess" [@@bs.val][@@bs.scope "window", "navigator"]

class virtual midi_interface = object
end [@bs]

class type virtual _midi_input = object
  inherit midi_interface
  method virtual on_midi_message : unit -> unit
end [@bs]

class type virtual _midi_output = object
  inherit midi_interface
end [@bs]

class virtual _midi_input_map = object
  method virtual get : string -> _midi_input option
end [@bs]

type midi_input_map = _midi_input_map

class virtual _midi_output_map = object
  method virtual get : string -> _midi_output option
end [@bs]

type midi_output_map = _midi_output_map

class midi_output = object
  inherit midi_interface
end [@bs]

class type virtual _midi_access = object
  method virtual sysex_enabled : bool
  method virtual inputs : midi_input_map
  method virtual outputs : midi_output_map
end [@bs]

type midi_access = _midi_access

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