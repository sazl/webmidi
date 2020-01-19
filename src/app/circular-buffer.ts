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

    CircularBuffer.prototype.currentIndex = function () {
        return this.index;
    }

    CircularBuffer.prototype.pop = function () {
        if (this.index === null) {
            return null;
        }

        const value = this._array[this.index];
        this.index = (this.index + 1) % this.length;

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

    CircularBuffer.prototype.clear = function () {
        this.length = 0;
        this._array = [];
        this.index = null;
    }

    CircularBuffer.prototype.isEmpty = function () {
        return this.length === 0;
    }

    CircularBuffer.prototype.toArray = function () {
        return this._array.slice(0, this.length);
    }

    CircularBuffer.IndexError = {};

    scope.CircularBuffer = CircularBuffer;
}(this));
