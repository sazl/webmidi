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
}

const midiToNote = (midiNote) => {
    return MIDI_TO_NOTE[midiNote] || 'XX';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function incrementStep() {
    this.increment = Math.floor(60 / this.bpm * 1000);
    await sleep(this.increment - Math.floor(this.increment / 100));
    this.time += this.increment;
}

async function playSequence() {
    console.log('Sequence Play', new Date());

    while (this.sequencerRunning) {
        const note = this.sequencerBuffer.pop();
        const channel = 0;
        const noteByte = noteToMidi(note);

        console.log({ note, noteByte, now: new Date().toTimeString(), time: this.time, increment: this.increment, bpm: this.bpm, velocity: this.velocity });

        const statusByteOn = (MIDI_NOTE_ON << 4) + channel;
        const noteVelocityOn = this.velocity;
        const midiDataOn = [statusByteOn, noteByte, noteVelocityOn];

        console.log('midi note on', midiDataOn);

        this.getMidiOutput().send(midiDataOn, this.time);

        const statusByteOff = (MIDI_NOTE_OFF << 4) + channel;
        const noteVelocityOff = 0;
        const midiDataOff = [statusByteOff, noteByte, noteVelocityOff];
        const noteOffTime = this.time + this.increment;

        console.log('midi note off', midiDataOff, noteOffTime);

        this.getMidiOutput().send(midiDataOff, noteOffTime);

        await this.incrementStep();
    }
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

    this.time = 0;
    this.sequenceInterval = setTimeout(this.playSequence, 0);
    this.sequencerRunning = true;
}

function clearSequence() {
    this.sequencerBuffer.clear();
}

function stopSequence() {
    console.log('Sequencer Stop', new Date());

    clearInterval(this.sequenceInterval);
    this.stopSound();

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
    }

    const onMIDIFailure = () => {
        console.log('Could not access your MIDI devices.');
    }

    navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
}

function init() {
    const sequence = [];
    const sequencerBuffer = CircularBuffer.fromArray(sequence);

    app = new Vue({
        el: '#app',
        created: initMidi,
        data: {
            time: 0,
            bpm: 120,
            increment: null,
            velocity: 127,
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
            playSequence,
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
        },
        watch: {
            midiInputId: function (val, oldVal) {
                this.getMidiInput(oldVal).onmidimessage = null;
                this.getMidiInput(val).onmidimessage = this.getMidiMessage;
            }
        },
        computed: {
            sequence: function () {
                const seq = this.sequencerBuffer._array.slice(0, this.sequencerBuffer.length)
                return seq.join(' ');
            }
        }
    });
}

window.onload = init;
