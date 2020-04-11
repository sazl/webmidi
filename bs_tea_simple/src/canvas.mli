
type _window = <
  width : int;
  height : int;
  innerHeight : int;
  innerWidth : int
> Js.t

type canvas = {
  mutable height : int;
  mutable width: int
} [@@bs.deriving]

type context = {
  keep: int;
} [@@bs.deriving]

type t

val get_canvas : string -> canvas
val get_context : canvas -> string -> context
val request_animation_frame : (unit -> unit) -> unit
val clear_rect : context -> int -> int -> int -> int -> unit
val fill_style_set : context -> string -> unit
val fill_rect : context -> int -> int -> int -> int -> unit
val fill_text : context -> string -> int -> int -> unit
val font_set : context -> string -> unit
