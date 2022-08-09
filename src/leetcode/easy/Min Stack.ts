// https://leetcode.com/problems/min-stack/

class MinStack {
    private actual = [];
    private auxiliary = [];

    pop() {
        this.auxiliary.pop();
        return this.actual.pop();
    }

    push(v: number) {
        const min = this.getMin();

        if (min == null || min > v) {
            this.auxiliary.push(v);
        } else {
            this.auxiliary.push(min)
        }

        this.actual.push(v);
    }

    top() {
        return this.actual[this.actual.length - 1];
    }

    getMin() {
        return this.auxiliary[this.auxiliary.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
