let start=document.querySelector("#start");
let stop = document.querySelector("#stop");
let result=document.getElementById("result");
start.addEventListener("click",function (event) {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function(event) {
           result .innerHTML = event.data;
        };
    } else {
       result.innerHTML = "Sorry, your browser does not support Web Workers...";
    }
})

stop.addEventListener("click",function stopWorker() { 
    w.terminate();
    w = undefined;
})