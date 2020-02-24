type midi_note = int
type midi_data = int list

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