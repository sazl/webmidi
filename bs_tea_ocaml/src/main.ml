open Tea.App
open Tea.Html

type msg =
  | Increment
  | Decrement
  | Reset
  | Set of int
  [@@bs.deriving {accessors}]

let init () = 8

let update model = function
  | Increment -> model + 1
  | Decrement -> model - 1
  | Reset -> 0
  | Set v -> v

let view model =
  raise Not_found

let main =
  beginnerProgram {
    model = init ();
    update;
    view;
  }
