type t = {
  mutable bpm : int;
  mutable increment : float;
  mutable timer_lookahead : float;
  mutable next_note_time : float;
  mutable current_index : int;
  mutable step : int;
  mutable sequencer_worker : WebWorkers.webWorker;
  mutable is_running : bool;

  mutable midi_inputs : Midi.midi_input_map option;
  mutable midi_outputs : Midi.midi_output_map option;
  mutable audio_context : Webaudio.audio_context option;
  sequence_buffer : (Step.step option) Vector.t;
}

val increment_step : t -> unit
val is_next_note_ready : t -> bool
val play_sequence_step : t -> unit
val play_step : t -> Step.step -> unit
val init : unit -> t
val start_sequence : t -> t
val stop_sequence : t -> t
val clear_sequence : t -> t
