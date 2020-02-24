let interval_duration = 100

let interval =  ref Js.Nullable.null

WebWorkers.setWorkerOnMessage WebWorkers.self (fun e: WebWorkers.MessageEvent.t ->

)