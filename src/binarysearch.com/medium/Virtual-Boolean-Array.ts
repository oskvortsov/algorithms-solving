// https://binarysearch.com/problems/Virtual-Boolean-Array

class BooleanArray {
    state = new Set();
    globalState = false;
    constructor() {}

    setTrue(i) {
        !this.globalState ? this.state.add(i) : this.state.delete(i);
    }

    setFalse(i) {
        this.globalState ? this.state.add(i) : this.state.delete(i);
    }

    setAllTrue() {
        this.state.clear();
        this.globalState = true;
    }

    setAllFalse() {
        this.state.clear();
        this.globalState = false;
    }

    getValue(i) {
       return this.globalState ? !this.state.has(i) : this.state.has(i);
    }
}

class BooleanArray1 {
    state = {};
    isAllTrue = false;
    constructor() {}

    setTrue(i) {
        this.state[i] = true;
    }

    setFalse(i) {
        this.state[i] = false;
    }

    setAllTrue() {
        this.state = {};
        this.isAllTrue = true;
    }

    setAllFalse() {
        this.state = {};
        this.isAllTrue = false;
    }

    getValue(i) {
        if (i in this.state) {
            return this.state[i];
        }

        return this.isAllTrue;
    }
}

const boolArr = new BooleanArray();
console.log(boolArr.state);
