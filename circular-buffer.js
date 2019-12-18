(function (scope) {
    'use strict';

    const DEFAULT_SIZE = 64;

    function CircularBuffer(n = DEFAULT_SIZE) {
        this._array = new Array(n);
        this.length = 0;
        this.size = n;
        this.index = 0;
    }

    CircularBuffer.prototype.push = function (item) {
        if (this.length == this.size) {
            this._array = CircularBuffer.resizeArray(this._array, this.length * 2);
            this.size = this._array.length;
        }

        this._array[this.length] = item;
        this.length++;
    }

    CircularBuffer.prototype.pop = function () {
        const index = this.index % this.length;
        const value = this._array[index];
        this.index = index + 1;

        return value;
    }

    CircularBuffer.resizeArray = function (inputArray, newSize, defaultValue = null) {
        return [...inputArray, ...Array(Math.max(newSize - inputArray.length, 0)).fill(defaultValue)];
    }

    CircularBuffer.fromArray = function (arrayValues) {
        const circ = new CircularBuffer(arrayValues.length);
        for (const value of arrayValues) {
            circ.push(value);
        }
        return circ;
    }

    CircularBuffer.IndexError = {};

    scope.CircularBuffer = CircularBuffer;
}(this));
