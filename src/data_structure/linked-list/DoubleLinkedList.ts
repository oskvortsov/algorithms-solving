// @ts-ignore
class NodeDLL<T> {
    data: T;
    next: NodeDLL<T> | null;
    prev: NodeDLL<T> | null;

    constructor(data: T, next: NodeDLL<T> = null, prev: NodeDLL<T> = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

export class DoubleLinkedList<T> {
    private head: NodeDLL<T> | null = null;
    private tail: NodeDLL<T> | null = null;
    private _size: number = 0;

    // Empty this linked list, O(n)
    clear() {
        let trav = this.head;

        while(trav) {
            const next = trav.next;
            trav.data = null;
            trav.next = null;
            trav.prev = null;
            trav = next;
        }

        this.head = this.tail = null;
        this._size = 0;
    }

    get size() {
        return this._size;
    }

    isEmpty() {
        return this.size == 0;
    }

    // Add an element to the tail of the linked list, O(1)
    add(elem: T) {
        this.addLast(elem);
    }

    // Add a node to the tail of the linked list, O(1)
    addLast(elem: T) {
        if (this.isEmpty()) {
            this.tail = this.head = new NodeDLL(elem);
        } else {
            this.tail.next = new NodeDLL(elem, null, this.tail);
            this.tail = this.tail.next;
        }
        this._size++;
    }

    // Add an element to the beginning of this linked list, O(1)
    addFirst(elem: T) {
        if (this.isEmpty()) {
            this.tail = this.head = new NodeDLL(elem);
        } else {
            const node = new NodeDLL(elem, this.head);

            this.head.prev = node;
            this.head = node;
        }
        this._size++;
    }

    // Add an element at a specified index
    addAt(index: number, elem: T) {
        if (index < 0 || index > this._size) {
            throw Error('Illegal Index');
        }

        if (index == 0) {
            this.addFirst(elem);
            return;
        }

        if (index == this._size) {
            this.addLast(elem);
            return;
        }

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }

        const node = new NodeDLL(elem, temp.next, temp);
        temp.next = node;
        temp.next.prev = node;

        this._size++;
    }

    // Check the value of the first node if it exists, O(1)
    peekFirst() {
        if (this.isEmpty()) throw Error('Empty list');

        return this.head.data;
    }

    // Check the value of the last node if it exists, O(1)
    peekLast() {
        if (this.isEmpty()) throw Error('Empty list');

        return this.tail.data;
    }

    // Remove the first value at the head of the linked list, O(1)
    removeFirst(): T {
        if (this.isEmpty()) throw Error('Empty list');

        const data = this.head.data;
        this.head = this.head.next;

        this._size--;

        if (this.isEmpty()) {
            this.head = this.tail = null;
        } else {
            this.head.prev = null;
        }

        return data;
    }

    // Remove the last value at the tail of the linked list, O(n)
    removeLast(): T {
        if (this.isEmpty()) throw Error('Empty list');

        const data = this.tail.data;
        this._size--;
        this.tail = this.tail.prev;

        if (this.isEmpty()) {
            this.head = null;
        } else {
            this.tail.next = null;
        }

        return data;
    }

    // Remove an arbitrary node from the linked list, O(1)
    private remove(node: NodeDLL<T>): T {
        if (node.next == null) return this.removeLast();
        if (node.prev == null) return this.removeFirst();

        const data = node.data;

        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.data = null;
        node = node.next = node.prev = null;

        this._size--;

        return data;
    }

    removeBy(obj: T): boolean {
        for (let trav = this.head; trav !== null; trav = trav.next) {
            if (trav.data === obj) {
                this.remove(trav);
                return true;
            }
        }

        return false;
    }

    removeAt(index: number): T {
        if (index < 0 || index >= this._size) {
            throw Error('Illegal Index');
        }

        if (index == 0) return this.removeFirst();
        if (index === this._size - 1) return this.removeLast();

        let trav: NodeDLL<T> = null;

        if (index < this._size / 2) {
            trav = this.head;

            for (let i = 0; i !== index; i++) {
                trav = trav.next;
            }
        } else {
            trav = this.tail;

            for (let i = this._size; i !== index; i--) {
                trav = trav.prev;
            }
        }

        return this.remove(trav);
    }

    // Find the index of a particular value in the linked list, O(n)
    indexOf(data: T): number {
        let index = 0;
        let trav = this.head;

        while (trav) {
            if (trav.data === data) {
                return index;
            }

            trav = trav.next;
            index++;
        }

        return -1;
    }

    contains(data: T): boolean {
        return this.indexOf(data) !== -1;
    }

    [Symbol.iterator]() {
        let temp = this.head;

        return {
            next: () => {
                const data = {
                    value: temp.data,
                    done: temp.next === null,
                }

                temp = temp.next;

                return data;
            }
        }
    }

    toString(): string {
        let str = '[';

        let trav = this.head;
        while (trav) {
            str += trav.data;
            if (trav.next !== null) str += ', ';

            trav = trav.next;
        }

        str += ']'

        return str;
    }
}
