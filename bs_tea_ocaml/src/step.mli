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

type step = {
  code: int;
  octave: int;
  note : note;
  velocity : int;
  channel : int;
}

val note_to_index : note -> int
