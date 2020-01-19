
class SequenceStep {
    code: string;
    note: string;
    velocity: number;
    channel: number;

    constructor(code: string, note: string, velocity: number, channel: number) {
        this.code = code;
        this.note = note;
        this.velocity = velocity;
        this.channel = channel;
    }
}

function incrementStep() {
    this.increment = 60.0 / this.bpm;
    this.nextNoteTime += 0.25 * this.increment;
}

function scheduleNote() {

}

function playSequenceStep() {
    while ((this.nextNoteTime < this.audioContext.currentTime + this.timerLookahead / 1000) && !this.sequencerBuffer.isEmpty()) {
        this.currentIndex = this.sequencerBuffer.currentIndex();
        const step = this.sequencerBuffer.pop();

        this.playStep(step);
        this.incrementStep();
    }
}

function playMidiNote(noteByte, velocity, channel) {
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

function playStep(step) {
    const noteByte = noteToMidi(step.note);

    console.log({ noteByte, time: this.time, increment: this.increment, bpm: this.bpm, velocity: this.velocity });

    const statusByte = (step.code << 4) + step.channel;
    const noteVelocity = step.velocity;
    const midiData = [statusByte, noteByte, noteVelocity];

    console.log('midi step: ', midiData, this.nextNoteTime);

    this.getMidiOutput().send(midiData, this.nextNoteTime);
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
    const statusByte = message.data[0];
    const code = statusByte >> 4;
    const channel = statusByte & 0xF;

    const note = this.midiToNote(message.data[1]);
    const velocity = (message.data.length > 2) ? message.data[2] : 0;

    const step = new SequenceStep(code, note, velocity, channel);

    switch (step.code) {
        case MIDI_NOTE_ON:
            if (velocity > 0) {
                this.noteOn(step);
            } else {
                step.code = MIDI_NOTE_OFF;
                this.noteOff(step);
            }
            break;
        case MIDI_NOTE_OFF:
            this.noteOff(step);
            break;
        default:
            break;
    }
}

function noteOn(step) {
    console.log('Note on: ', step.note, step.channel, step.velocity);

    this.addStepToSequence(step);
}

function noteOff(step) {
    console.log('Note off: ', step.note, step.channel, step.velocity);

    this.addStepToSequence(step);
}

function getMidiInput(inputId) {
    return this.midiInputMap[inputId || this.midiInputId];
}

function getMidiOutput(outputId) {
    return this.midiOutputMap[outputId || this.midiOutputId];
}

function addStepToSequence(step) {
    this.sequencerBuffer.push(step);
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
