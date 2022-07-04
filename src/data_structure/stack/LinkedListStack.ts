import { LinkedList } from '../linked-list/LinkedList';
import { Stack } from './types';

export class LinkedListStack<T> implements Stack<T> {
    private list = new LinkedList<T>();

    get size() {
        return this.list.size;
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }

    push(elem: T) {
        this.list.addLast(elem);
    }

    pop(): T {
        if (this.isEmpty()) throw new Error('Empty Stack');
        return this.list.removeLast();
    }

    peek(): T {
        if (this.isEmpty()) throw new Error('Empty Stack');
        return this.list.peekLast();
    }
}
