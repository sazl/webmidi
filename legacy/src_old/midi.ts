const MIDI_NOTE_ON = 9;
const MIDI_NOTE_OFF = 8;

const noteToMidi = (noteString: string) => {
    const initialNote = 9;
    const [note, octaveStr] = noteString.split('');
    const octave = parseInt(octaveStr);
    const oddNote = (note == 'F' || note == 'B') ? 0 : 1;
    const index = note.charCodeAt(0) - 65;
    return (octave * 12) + (initialNote + (index - 1) * 2 + oddNote);
}

const MIDI_TO_NOTE: { [midiNumber: number]: string | undefined } = {
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
    89: 'F6',
    91: 'G6',
    93: 'A6',
    95: 'B6',
    96: 'C6',
};

const midiToNote = (midiNote: number): string => {
    return MIDI_TO_NOTE[midiNote] || 'XX';
};


initMidi() {
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