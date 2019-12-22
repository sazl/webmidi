let app;
let midiInputs = [];
const MIDI_NOTE_ON = 9;
const MIDI_NOTE_OFF = 8;

const noteToMidi = (noteString) => {
    const initialNote = 9;
    const [note, octave] = noteString.split('');
    const oddNote = (note == 'F' || note == 'B') ? 0 : 1;
    const index = note.charCodeAt(0) - 65;
    return (octave * 12) + (initialNote + (index - 1) * 2 + oddNote);
}

const MIDI_TO_NOTE = {
    45: 'A3',
    47: 'B3',
    48: 'C3',
    50: 'D3',
    52: 'E3',
    53: 'F3',
    55: 'G3',
    57: 'A4',
    59: 'B4',
    60: 'C4',
    62: 'D4',
    64: 'E4',
    65: 'F4',
    67: 'G4',
    69: 'A5',
    71: 'B5',
    72: 'C5',
    74: 'D5',
    76: 'E5',
    77: 'F5',
    79: 'G5',
    81: 'A6',
    83: 'B6',
    84: 'C6',
    86: 'D6',
    88: 'E6',
}

const midiToNote = (midiNote) => {
    return MIDI_TO_NOTE[midiNote] || 'XX';
}

function incrementStep() {
    this.increment = 60.0 / this.bpm;
    this.nextNoteTime += 0.25 * this.increment;
}

function playSequenceStep() {
    while ((this.nextNoteTime < this.audioContext.currentTime + this.timerLookahead / 1000) && !this.sequencerBuffer.isEmpty()) {
        this.currentIndex = this.sequencerBuffer.currentIndex();
        const note = this.sequencerBuffer.pop();

        this.playNote(note);
        this.incrementStep();
    }
}

function playMidiNote(noteByte, channel) {
    console.log({ noteByte, time: this.time, increment: this.increment, bpm: this.bpm, velocity: this.velocity });

    const statusByteOn = (MIDI_NOTE_ON << 4) + channel;
    const noteVelocityOn = this.velocity;
    const midiDataOn = [statusByteOn, noteByte, noteVelocityOn];

    console.log('midi note on', midiDataOn, this.nextNoteTime);

    this.getMidiOutput().send(midiDataOn, this.nextNoteTime);

    const statusByteOff = (MIDI_NOTE_OFF << 4) + channel;
    const noteVelocityOff = 0;
    const midiDataOff = [statusByteOff, noteByte, noteVelocityOff];
    const noteOffTime = this.nextNoteTime + this.noteLength;

    console.log('midi note off', midiDataOff, noteOffTime);

    this.getMidiOutput().send(midiDataOff, noteOffTime);
}

function playNote(note) {
    const channel = 0;
    const noteByte = noteToMidi(note);

    this.playMidiNote(noteByte, channel);
}

function stopSound() {
    const ccCode = 11;
    const channel = 1;
    const statusByte = (ccCode << 4) + channel;

    const stopSound = 120;
    const value = 127;

    this.getMidiOutput().send([statusByte, stopSound, value])
    this.getMidiOutput().send([statusByte, 123, 0])
}

function getMidiMessage(message) {
    var statusByte = message.data[0];
    const command = statusByte >> 4;
    const channel = statusByte & 0xF;

    var note = this.midiToNote(message.data[1]);
    var velocity = (message.data.length > 2) ? message.data[2] : 0;

    switch (command) {
        case MIDI_NOTE_ON:
            if (velocity > 0) {
                this.noteOn(note, channel, velocity);
            } else {
                this.noteOff(note, channel);
            }
            break;
        case MIDI_NOTE_OFF:
            this.noteOff(note, channel, velocity);
            break;
        default:
            break;
    }
}

function noteOn(note, channel, velocity) {
    console.log('Note on: ', note, channel, velocity);
}

function noteOff(note, channel, velocity) {
    console.log('Note off: ', note, channel, velocity);
    this.addNoteToSequence(note);
}

function getMidiInput(inputId) {
    return this.midiInputMap[inputId || this.midiInputId];
}

function getMidiOutput(outputId) {
    return this.midiOutputMap[outputId || this.midiOutputId];
}

function addNoteToSequence(note) {
    this.sequencerBuffer.push(note);
}

function startSequence() {
    if (this.sequencerRunning) {
        return;
    }

    this.stopSequence();

    console.log('Sequencer Start', new Date());

    this.audioContext = new AudioContext();
    this.nextNoteTime = this.audioContext.currentTime;
    this.sequencerWorker.postMessage('start');
    this.sequencerRunning = true;
}

function clearSequence() {
    this.sequencerBuffer.clear();
}

function stopSequence() {
    console.log('Sequencer Stop', new Date());

    this.sequencerWorker.postMessage('stop');
    this.sequencerRunning = false;
}

function initMidi() {
    const onMIDISuccess = (midiAccess) => {
        console.log(midiAccess);

        const inputs = midiAccess.inputs;

        inputs.forEach((inputDevice) => {
            this.midiInputMap[inputDevice.id || 'unknown'] = inputDevice;
            this.midiInputs.push(inputDevice);
        })

        this.midiInputId = this.midiInputs[0].id;

        const outputs = midiAccess.outputs;

        outputs.forEach((outputDevice) => {
            this.midiOutputMap[outputDevice.id || 'unknown'] = outputDevice;
            this.midiOutputs.push(outputDevice);
        })

        this.midiOutputId = this.midiOutputs[0].id;
        this.sequencerWorker = new Worker('worker.js');

        this.sequencerWorker.postMessage({ interval: this.timerResolution });
        this.sequencerWorker.onmessage = this.onSequencerEvent;
    }

    const onMIDIFailure = () => {
        console.log('Could not access your MIDI devices.');
    }

    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
}

function onSequencerEvent(event) {
    if (event.data == "tick") {
        this.playSequenceStep();
    }
    // console.log("message: " + event.data);
}

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
        },
        methods: {
            startSequence,
            stopSequence,
            playNote,
            playSequenceStep,
            incrementStep,
            stopSound,
            getMidiInput,
            getMidiOutput,
            getMidiMessage,
            addNoteToSequence,
            noteOff,
            noteOn,
            midiToNote,
            clearSequence,
            onSequencerEvent,
            playMidiNote,
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
                const seq = this.sequencerBuffer._array.slice(0, this.sequencerBuffer.length);
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
