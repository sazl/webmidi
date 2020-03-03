let interval_duration = 100
let interval = ref Js.Nullable.null

type message = {
  action: string;
  interval: float;
}

let default_message = {
  action = "default";
  interval = 0.0;
}

let tick_message = { default_message with action = "tick" }

let tick () =
  WebWorkers.postMessageFromWorker tick_message

let init () =
  let worker_init (e : WebWorkers.MessageEvent.t) =
    let data: message = WebWorkers.MessageEvent.data(e) in
    if data.action == "start"
    then (
        Js.log("starting");
        interval := Js.Nullable.return (Js.Global.setInterval (fun _ ->
          WebWorkers.postMessageFromWorker tick_message
        ) interval_duration)
    )
    else ()
  in
    WebWorkers.setWorkerOnMessage WebWorkers.self worker_init
