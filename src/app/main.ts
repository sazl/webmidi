let app;
let midiInputs = [];

/* ------------------------------------------------------------------------ */
/* Init */
/* ------------------------------------------------------------------------ */

function init() {
    const sequence = [];
    const sequencerBuffer = CircularBuffer.fromArray(sequence);

    app = new Vue({
        el: '#app',
        created: initMidi,
        data: {
            time: 0,
            bpm: 120.0,
            velocity: 127,
            timerResolution: 25, // ms
            timerLookahead: 100, // ms
            nextNoteTime: 0.0, // seconds
            noteLength: 0.05, // seconds
            audioContext: null,
            sequencerWorker: null,
            increment: null,
            currentIndex: 0,
            sequenceInterval: null,
            sequencerRunning: false,
            sequencerBuffer,
            midiOutputId: null,
            midiInputId: null,
            midiInputMap: {},
            midiInputs: [],
            midiOutputMap: {},
            midiOutputs: [],
            // Canvas
            draw,
            canvas,
            canvasContext,
        },
        methods: {
            startSequence,
            stopSequence,
            playSequenceStep,
            incrementStep,
            stopSound,
            getMidiInput,
            getMidiOutput,
            getMidiMessage,
            addStepToSequence,
            noteOff,
            noteOn,
            midiToNote,
            clearSequence,
            onSequencerEvent,
            playStep,
            // Canvas
            resetCanvas,
            initCanvas,
        },
        watch: {
            midiInputId: function (val, oldVal) {
                this.getMidiInput(oldVal).onmidimessage = null;
                this.getMidiInput(val).onmidimessage = this.getMidiMessage;
            },
            timerResolution: function (val) {
                this.sequencerWorker.postMessage({ interval: val });
            },
            noteLength: function (val) {

            }
        },
        computed: {
            sequence: function () {
                const seq = this.sequencerBuffer.toArray();
                return seq.map((note, index) => ({
                    id: `${note}${index}`,
                    active: index === this.currentIndex,
                    note
                }));
            }
        }
    });
}

window.onload = init;
