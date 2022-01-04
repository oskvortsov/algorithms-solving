//https://binarysearch.com/problems/Set
class CustomSet {
    private  store: Record<number, 1>;
    constructor() {
        this.store = {};
    }

    add(val: number) {
        this.store[val] = 1;
    }

    exists(val: number): boolean {
        return val in this.store;
    }

    remove(val: number) {
        delete this.store[val];
    }
}
