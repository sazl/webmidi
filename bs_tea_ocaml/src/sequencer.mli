type t

val increment_step : t -> unit
val is_next_note_ready : t -> bool
val play_sequence_step : t -> unit
val play_step : t -> Step.step -> unit
val init : unit -> t
val start_sequence : t -> unit
val stop_sequence : t -> unit
val clear_sequence : t -> t

