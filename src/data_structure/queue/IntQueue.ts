import { Queue } from './types';

export class IntQueue implements Queue<number> {
    private readonly data: Array<number>;
    private _size: number;
    private front: number;
    private end: number;

    constructor(capacity: number = 0) {
        this.data = new Array(capacity);
        this.front = this.end = this._size = 0;
    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    isFull(): boolean {
        return this._size === this.data.length;
    }

    offer(elem: number) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }

        this._size++;
        this.data[this.end++] = elem;
        this.end = this.end % this.data.length;
    }

    get size(): number {
        return this._size;
    }

    peek(): number {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        this.front = this.front % this.data.length;
        return this.data[this.front];
    }

    poll(): number {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        this._size--;
        this.front = this.front % this.data.length;
        return this.data[this.front++];
    }
}
