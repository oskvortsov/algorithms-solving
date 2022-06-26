class LinkedList<T = number> {
    next: LinkedList<T> | null;
    value: T;

    constructor(val: T, next: LinkedList<T> | null = null) {
        this.value = val;
        this.next = next;
    }
}
