let app;
let midiInputs = [];

const noteToMidi = (noteString) => {
    const initialNote = 21;
    const [note, octave] = noteString.split('');
    const oddNote = (note == 'F' || note == 'B') ? 0 : 1;
    const index = note.charCodeAt(0) - 65;
    return (octave * 12) + (initialNote + (index - 1) * 2 + oddNote);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function incrementStep() {
    await sleep(this.multipler - this.multipler / 10);
    this.time += this.multipler;
}

async function playSequence() {
    console.log('Sequence Play', new Date());

    while (this.sequencerRunning) {
        const note = this.sequencerBuffer.pop();
        const noteOn = 9;
        const noteOff = 8;
        const channel = 0;
        const noteByte = noteToMidi(note);

        console.log('Sequence Note: ', note, noteByte, this.time)

        const statusByteOn = (noteOn << 4) + channel;
        const noteVelocityOn = 127;
        const midiDataOn = [statusByteOn, noteByte, noteVelocityOn];

        this.getMidiOutput().send(midiDataOn, this.time);

        const statusByteOff = (noteOff << 4) + channel;
        const noteVelocityOff = 127;
        const midiDataOff = [statusByteOff, noteByte, noteVelocityOff];

        this.getMidiOutput().send(midiDataOff, this.time + this.multipler / 2);

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
        'C3', 'A3', 'D3', 'E3', 'D3',
    ];
    const sequencerBuffer = CircularBuffer.fromArray(sequence);

    app = new Vue({
        el: '#app',
        created: initMidi,
        data: {
            sequence,
            time: 0,
            multipler: 1000,
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
        }
    });
}

window.onload = init;
