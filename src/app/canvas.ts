/* ------------------------------------------------------------------------ */
/* Canvas */
/* ------------------------------------------------------------------------ */

function draw() {
    var currentNote = last16thNoteDrawn;
    var currentTime = audioContext.currentTime;

    while (notesInQueue.length && notesInQueue[0].time < currentTime) {
        currentNote = notesInQueue[0].note;
        notesInQueue.splice(0, 1);   // remove note from queue
    }

    // We only need to draw if the note has moved.
    if (last16thNoteDrawn != currentNote) {
        var x = Math.floor(canvas.width / 18);
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < 16; i++) {
            canvasContext.fillStyle = (currentNote == i) ?
                ((currentNote % 4 === 0) ? "red" : "blue") : "black";
            canvasContext.fillRect(x * (i + 1), x, x / 2, x / 2);
        }
        last16thNoteDrawn = currentNote;
    }

    // set up to draw again
    requestAnimFrame(draw);
}

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function resetCanvas(e) {
    // resize the canvas - but remember - this clears the canvas too.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //make sure we scroll to the top left.
    window.scrollTo(0, 0);
}

function initCanvas() {
    const container = document.createElement('div');
    container.className = "container";
    this.canvas = document.createElement('canvas');
    this.canvasContext = canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(container);
    container.appendChild(canvas);
    this.canvasContext.strokeStyle = "#ffffff";
    this.canvasContext.lineWidth = 2;

    window.onorientationchange = this.resetCanvas;
    window.onresize = this.resetCanvas;

    requestAnimFrame(draw);
}
