import { Stack } from './types';

class ArrayStack<T> implements Stack<T> {
    private items: Array<T> = [];

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    get size() {
        return this.items.length;
    }

    pop(): T {
        if (this.isEmpty()) throw new Error('Empty Stack');

        return this.items.pop();
    }

    push(elem: T) {
        this.items.push(elem);
    }

    peek(): T {
        if (this.isEmpty()) throw new Error('Empty Stack');

        return this.items[this.items.length - 1];
    }
}
