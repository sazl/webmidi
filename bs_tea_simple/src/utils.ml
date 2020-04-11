let get_exn = function
  | Some x -> x
  | None   -> raise (Invalid_argument "Option.get")
  