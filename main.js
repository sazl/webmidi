let app;
let midiOutput;
let sequenceInterval;

const sequence = [
    'C3', 'A3', 'D3', 'E3', 'E4',
    'C3', 'A3', 'D3', 'E3', 'A4',
    'C2', 'A2', 'D3', 'E3', 'E4'
];
const sequenceSize = sequence.length;
const multipler = 1000;
const velocity = 1;
const sequenceDuration = (sequenceSize * multipler);
let time = 0;

// Play a note on all channels of the selected output
function playSequence() {
    console.log('Sequence Play', new Date());

    for (let note of sequence) {

        console.log('Sequence Note: ', note, time)

        midiOutput.playNote(note, 1, { duration: multipler, time, velocity })
            .stopNote(note, 1, { time: time + multipler });
        time += multipler;
    }
}

function startSequence() {
    stopSequence();

    console.log('Sequencer Start', new Date());

    time = 0;
    playSequence();
    sequenceInterval = setInterval(playSequence, sequenceDuration);

    this.sequencerRunning = true;
}

function stopSequence() {
    console.log('Sequencer Stop', new Date());

    clearInterval(sequenceInterval);

    this.sequencerRunning = false;
}

function init() {
    app = new Vue({
        el: '#app',
        data: {
            sequencerRunning: false,
        },
        methods: {
            startSequence,
            stopSequence,
        }
    })
}

function midiInit() {
    WebMidi.enable(function (err) {
        if (err) {
            console.log("WebMidi could not be enabled.", err);
        }

        // Viewing available inputs and outputs
        console.log('MIDI Inputs: ', WebMidi.inputs);
        console.log('MIDI Outputs: ', WebMidi.outputs);

        // Display the current time
        console.log('MIDI time: ', WebMidi.time);

        // Retrieving an output port/device using its id, name or index
        midiOutput = WebMidi.outputs[0];

        console.log('Sequence length: ', sequenceSize);
        console.log('Sequence duration: ', sequenceDuration);
        console.log('Step duration: ', multipler);
    });
}

window.onload = function () {
    this.midiInit();
    this.init();
}
