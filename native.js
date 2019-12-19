let app;
let midiInputs = [];

const noteToMidi = (noteString) => {
    const initialNote = 9;
    const [note, octave] = noteString.split('');
    const oddNote = (note == 'F' || note == 'B') ? 0 : 1;
    const index = note.charCodeAt(0) - 65;
    return (octave * 12) + (initialNote + (index - 1) * 2 + oddNote);
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
        const noteOn = 9;
        const noteOff = 8;
        const channel = 0;
        const noteByte = noteToMidi(note);

        console.log({ note, noteByte, now: new Date().toTimeString(), time: this.time, increment: this.increment, bpm: this.bpm, velocity: this.velocity });

        const statusByteOn = (noteOn << 4) + channel;
        const noteVelocityOn = this.velocity;
        const midiDataOn = [statusByteOn, noteByte, noteVelocityOn];

        console.log('midi note on', midiDataOn);

        this.getMidiOutput().send(midiDataOn, this.time);

        const statusByteOff = (noteOff << 4) + channel;
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

function getMidiOutput() {
    return this.midiOutputMap[this.midiOutputId];
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

function stopSequence() {
    console.log('Sequencer Stop', new Date());

    clearInterval(this.sequenceInterval);
    this.stopSound();

    this.sequencerRunning = false;
}

function initMidi() {
    const onMIDISuccess = (midiAccess) => {
        console.log(midiAccess);

        var inputs = midiAccess.inputs;
        var outputs = midiAccess.outputs;


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
    const sequence = [
        'C3', 'A3', 'D3', 'E3', 'D3', 'A3', 'E3', 'D3',
    ];
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
            midiOutputMap: {},
            midiOutputs: [],
        },
        methods: {
            startSequence,
            stopSequence,
            playSequence,
            incrementStep,
            stopSound,
            getMidiOutput,
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
