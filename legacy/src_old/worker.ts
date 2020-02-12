let interval = 100;
let intervalId = null;

self.onmessage = function (e) {
    if (e.data == "start") {
        console.log("starting");
        intervalId = setInterval(function () { postMessage("tick"); }, interval)
    }
    else if (e.data.interval) {
        console.log("setting interval");
        interval = e.data.interval;
        console.log("interval=" + interval);
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = setInterval(function () { postMessage("tick"); }, interval)
        }
    }
    else if (e.data == "stop") {
        console.log("stopping");
        clearInterval(intervalId);
        intervalId = null;
    }
};

postMessage('init');