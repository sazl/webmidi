
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

external window : _window = "window" [@@bs.val]
external get_canvas : string -> canvas = "getElementById" [@@bs.val] [@@bs.scope "document"]
external get_context : canvas -> string -> context = "getContext" [@@bs.send]
external fill_style_set : context -> string -> unit = "fillStyle" [@@bs.set]
external clear_rect : context -> int -> int -> int -> int -> unit = "clearRect" [@@bs.send]
external fill_rect : context -> int -> int -> int -> int -> unit = "fillRect" [@@bs.send]
external fill_text : context -> string -> int -> int -> unit = "fillText" [@@bs.send]
external font_set : context -> string -> unit = "font" [@@bs.set]
external scroll_to : int -> int -> unit = "scrollTo" [@@bs.val] [@@bs.scope "window"]
external request_animation_frame : (unit -> unit) -> unit = "requestAnimationFrame" [@@bs.val] [@@bs.scope "window"]


class t canvas_id =
  let c = get_canvas canvas_id in
  object
    val mutable canvas = c
    val mutable canvas_context = get_context c "2d"
    val mutable current_note = 0
    val mutable current_time = 0
    val note_buffer = Vector.make 16 ~dummy:0

    method update ~time ~note =
      current_time <- time;
      current_note <- note;
      while (not (Vector.is_empty note_buffer)) && (Vector.get note_buffer 0) == 0 do
        current_note <- Vector.pop note_buffer;
      done;


    method draw () =
      ()

    method reset_canvas () =
      canvas.width <- window##innerWidth;
      canvas.height <- window##innerHeight;
      scroll_to 0 0
  end
