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
  index : int;
  octave: int;
  note : note;
  velocity : int;
  channel : int;
  time : float;
  length : float;
}

val note_to_index : note -> int
