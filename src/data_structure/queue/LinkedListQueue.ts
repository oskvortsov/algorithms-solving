import { LinkedList } from '../linked-list/LinkedList';
import { Queue } from './types';

export class LinkedListQueue<T> implements Queue<T>, Iterable<T> {
    private list = new LinkedList<T>();

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    get size() {
        return this.list.size;
    }

    // Peel the element of the front of the queue
    peek(): T {
        if (this.isEmpty()) throw Error("Empty Queue");
        return this.list.peekFirst();
    }

    // Poll an element from the front of the queue
    poll(): T {
        if (this.isEmpty()) throw Error("Empty Queue");
        return this.list.removeFirst();
    }

    // Add an element to the back of the queue
    offer(elem: T) {
        this.list.addLast(elem);
    }

    [Symbol.iterator]() {
        return this.list[Symbol.iterator]();
    }
}
