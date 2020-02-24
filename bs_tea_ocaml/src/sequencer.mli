type t

val increment_step : t -> unit
val shedule_note : t -> t
val is_next_note_ready : t -> bool
val play_sequence_step : t -> t
val play_midi_note : t -> t
val play_step : t -> Step.step -> t
val stop_sound : t -> t
val get_midi_message : t -> t
val note_on : t -> t
val note_off : t -> t
val get_midi_input : t -> t
val get_midi_output : t -> t
val add_sequence_to_step : t -> t
val init : unit -> t
val start_sequence : t -> unit
val stop_sequence : t -> unit
val clear_sequence : t -> t
val init_midi : t -> t
val on_sequencer_event : t -> t