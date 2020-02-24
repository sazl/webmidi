type audio_context

external create_audio_context : unit -> audio_context = "AudioContext" [@@bs.new]
external get_current_time : audio_context -> float = "currentTime" [@@bs.get]
