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

type step = {
  code: int;
  octave: int;
  note : note;
  velocity : int;
  channel : int;
}
