type step = {
  code: int;
  octave: int;
  note : string;
  velocity : int;
  channel : int;
}

module type Sequencer = sig
  type t
  val increment_step : t -> t
  val shedule_note : t -> t
  val is_next_note_ready : t -> bool
  val play_sequence_step : t -> t
  val play_midi_note : t -> t
  val play_step : t -> t
  val stop_sound : t -> t
  val get_midi_message : t -> t
  val note_on : t -> t
  val note_off : t -> t
  val get_midi_input : t -> t
  val get_midi_output : t -> t
  val add_sequence_to_step : t -> t
  val start_sequence : t -> t
  val stop_sequence : t -> t
  val clear_sequence : t -> t
  val init_midi : t -> t
  val on_sequencer_event : t -> t
end

module Make (S : Sequencer) = struct
  type t = {
    mutable bpm : int;
    mutable increment : float;
    mutable timer_lookahead : float;
    mutable next_note_time : float;
    mutable current_index : int;
    mutable step : int;
    mutable sequencer_worker : int;
    mutable is_sequencer_running : bool;
    audio_context : Webaudio.audio_context;
    sequence_buffer : sequence_step Vector.t;
  }

  let increment_step t = (
    t.current_index <- (t.current_index + 1) mod (Vector.length t.sequence_buffer);
    t.increment <- 60.0 /. float_of_int t.bpm;
    t.next_note_time <- t.next_note_time +. 0.25 *. t.increment;
    t
  )

  let is_next_note_ready t =
    t.next_note_time < t.audio_context.current_time +. t.timer_lookahead /. 1000.0 &&
    Vector.is_empty t.sequence_buffer

  let play_step t step =
    let midi_note = Midi.step_to_midi step.note in
    let status_byte_on = Midi.note_on_channel step.channel in
    let midi_data = [status_byte_on; midi_note; step.velocity] in
    Midi.send t.next_note_time midi_data

  let rec play_sequence_step t =
    if is_next_note_ready t
    then (
      let step = Vector.pop t.sequence_buffer in
      play_step t step;
      increment_step t
    )

  let start_sequence =
    if t.is_sequencer_running
    then (
      stop_sequence t;
      t.audio_context <- AudioContext ();
      t.next_note_time <- t.audio_context.current_time;
      t.sequencer_worker.postMessage("start");
      t.is_sequencer_running = true;
    )

  let clear_sequence = (
    t.buffer.clear
  )

  let stop_sequence = (
    t.worker.postMessage("stop");
    t.is_sequencer_running = false;
  )
end