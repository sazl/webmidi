type t = {
  mutable bpm : int;
  mutable increment : float;
  mutable timer_lookahead : float;
  mutable next_note_time : float;
  mutable current_index : int;
  mutable step : int;
  mutable sequencer_worker : WebWorkers.webWorker;
  mutable is_sequencer_running : bool;
  mutable audio_context : Webaudio.audio_context;
  sequence_buffer : Step.step Vector.t;
}

let increment_step t = (
  t.current_index <- (t.current_index + 1) mod (Vector.length t.sequence_buffer);
  t.increment <- 60.0 /. float_of_int t.bpm;
  t.next_note_time <- t.next_note_time +. 0.25 *. t.increment
)

let is_next_note_ready t =
  t.next_note_time < (Webaudio.get_current_time t.audio_context) +. t.timer_lookahead /. 1000.0 &&
  Vector.is_empty t.sequence_buffer

let play_step t (step : Step.step) =
  let midi_data = Midi.step_to_midi step in
  Midi.send t.next_note_time midi_data

let play_sequence_step t =
  if is_next_note_ready t
  then (
    let step = Vector.pop t.sequence_buffer in
    play_step t step;
    increment_step t
  )

let stop_sequence t = (
  WebWorkers.postMessage t.sequencer_worker "stop";
  t.is_sequencer_running <- false
)

let start_sequence t =
  if t.is_sequencer_running
  then (
    stop_sequence t;
    t.audio_context <- Webaudio.create_audio_context ();
    t.next_note_time <- Webaudio.get_current_time t.audio_context;
    WebWorkers.postMessage t.sequencer_worker "start";
    t.is_sequencer_running <- true;
  )

let init =
  let worker = WebWorkers.create_webworker "worker.bs.js" in
  let message = [%bs.obj { interval = 0 } ] in
  WebWorkers.postMessage worker message

let clear_sequence t = (
  Vector.clear t.sequence_buffer
)
