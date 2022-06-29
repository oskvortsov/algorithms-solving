class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T, next: Node<T> = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList<T> {
    private head: Node<T> = null;
    private tail: Node<T> = null;
    private _size = 0;

    // Empty this linked list, O(n)
    clear() {
        let trav = this.head;

        while(trav) {
            const next = trav.next;
            trav.data = null;
            trav.next = null;
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
            this.tail = this.head = new Node(elem);
        } else {
            this.tail.next = new Node(elem);
            this.tail = this.tail.next;
        }
        this._size++;
    }

    // Add an element to the beginning of this linked list, O(1)
    addFirst(elem: T) {
        if (this.isEmpty()) {
            this.tail = this.head = new Node(elem);
        } else {
            this.head = new Node(elem, this.head);
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

        temp.next = new Node(elem, temp.next);
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

        if (this.isEmpty()) this.tail = null;

        return data;
    }

    // Remove the last value at the tail of the linked list, O(n)
    removeLast(): T {
        if (this.isEmpty()) throw Error('Empty list');

        const data = this.tail.data;
        let temp = this.head;

        for (let i = 0; i < this._size - 2; i++) {
            temp = temp.next;
        }
        this._size--;

        if (this.isEmpty()) {
            this.head = this.tail = null;
        } else {
            this.tail = temp;
            temp.next = null;
        }

        return data;
    }

    // Remove an arbitrary node from the linked list, O(1)
    private remove(node: Node<T>): T {
        if (node.next == null) return this.removeLast();
        if (this._size === 1 || node == this.head) return this.removeFirst();

        const data = node.data;

        let trave1 = this.head;
        let trave2 = this.head.next;

        while(trave2 !== node) {
            trave1 = trave1.next;
            trave2 = trave2.next;
        }

        trave1.next = node.next;
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

        let trav = this.head;

        while(index-- > 0) {
            trav = trav.next;
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
