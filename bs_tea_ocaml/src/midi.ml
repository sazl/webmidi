type midi_note = int
let note_on = 9
let note_off = 8

type note =
  | NoteA
  | NoteAS
  | NoteB
  | NoteC
  | NoteCS
  | NoteD
  | NoteDS
  | NoteE
  | NoteF
  | NoteFS
  | NoteG
  | NoteGS

let note_to_index note =
  match note with
  | NoteC  -> 0
  | NoteCS -> 1
  | NoteD  -> 2
  | NoteDS -> 3
  | NoteE  -> 4
  | NoteF  -> 5
  | NoteFS -> 6
  | NoteG  -> 7
  | NoteGS -> 8
  | NoteA  -> 9
  | NoteAS -> 10
  | NoteB  -> 11

let step_to_midi step =
  (step.octave * 12) + (note_to_index step.note)

let note_on_channel channel =
  (note_on lsl 4) + channel
