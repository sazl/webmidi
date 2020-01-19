class CircularBuffer {

    static DEFAULT_SIZE = 64;
    static IndexError: Error;

    _array: Array<object>;
    length: number;
    size: number;
    index: number;

    constructor(n = CircularBuffer.DEFAULT_SIZE) {
        this._array = new Array(n);
        this.length = 0;
        this.size = n;
        this.index = 0;
    }

    push(item) {
        if (this.index === null) {
            this.index = 0;
        }

        if (this.length == this.size) {
            this._array = CircularBuffer.resizeArray(this._array, this.length * 2);
            this.size = this._array.length;
        }

        this._array[this.length] = item;
        this.length++;
    }

    currentIndex() {
        return this.index;
    }

    pop() {
        if (this.index === null) {
            return null;
        }

        const value = this._array[this.index];
        this.index = (this.index + 1) % this.length;

        return value;
    }

    clear() {
        this.length = 0;
        this._array = [];
        this.index = null;
    }

    isEmpty() {
        return this.length === 0;
    }

    toArray() {
        return this._array.slice(0, this.length);
    }

    static resizeArray(inputArray, newSize, defaultValue = null) {
        return [...inputArray, ...Array(Math.max(newSize - inputArray.length, 0)).fill(defaultValue)];
    }

    static fromArray(arrayValues) {
        const circ = new CircularBuffer(arrayValues.length);
        for (const value of arrayValues) {
            circ.push(value);
        }
        return circ;
    }
}
