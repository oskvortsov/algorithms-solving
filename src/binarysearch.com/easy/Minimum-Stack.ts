// https://binarysearch.com/problems/Minimum-Stack
class MinimumStack {
    data = [];
    mapValue = {};
    minVal = Infinity;

    constructor() {
        this.data = [];
    }

    append(val) {
        this.data.push(val);

        if (val in this.mapValue) {
            this.mapValue[val]++;
        } else {
            this.mapValue[val] = 1;
        }
        this.minVal = Math.min(val, this.minVal);
    }

    peek() {
        if (this.data.length) {
            return this.data[this.data.length - 1];
        }
    }

    min() {
        return this.minVal;
    }

    pop() {
        let val = this.data.pop();
        if (this.mapValue[val] == 1) {
            delete this.mapValue[val];
            this.minVal = Math.min(...Object.keys(this.mapValue).map(Number));
        } else {
            this.mapValue[val]--;
        }

        return val;
    }
}
