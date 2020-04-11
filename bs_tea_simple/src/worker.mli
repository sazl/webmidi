type message = {
  action: string;
  interval: float;
}

val default_message : message
val tick : unit -> unit
val init : unit
