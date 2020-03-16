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

type t

val get_canvas : string -> canvas
