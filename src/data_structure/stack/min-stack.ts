class MinStack {
    private actual = [];
    private auxiliary = [];

    private isEmpty() {
        return this.actual.length == 0;
    }

    pop() {
        if (this.isEmpty()) return null;

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
        if (this.isEmpty()) return null;
        return this.actual[this.actual.length - 1];
    }

    getMin() {
        if (this.isEmpty()) return null;

        return this.auxiliary[this.auxiliary.length - 1];
    }
}
