import { Queue } from './types';

export class ArrayQueue<T> implements Queue<T>{
    private data: Array<T> = [];
    private front: number;
    private rear: number;

    constructor(capacity: number = 0) {
        this.data = new Array<T>(capacity + 1);
        this.front = 0;
        this.rear = 0;
    }

    offer(elem: T) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }

        this.data[this.rear++] = elem;
        this.rear = this.adjustNumber(this.rear, this.data.length);
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        this.front = this.adjustNumber(this.front, this.data.length);
        return this.data[this.front];
    }

    poll(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        this.front = this.adjustNumber(this.front, this.data.length);
        return this.data[this.front++];
    }

    isEmpty(): boolean {
        return this.front === this.rear;
    }

    isFull(): boolean {
        return (this.front + this.data.length - this.rear) % this.data.length == 1;
    }

    get size(): number {
        return this.adjustNumber(this.rear + this.data.length - this.front, this.data.length);
    }

    private adjustNumber(index: number, size: number) {
        return index >= size ? index - size : index;
    }
}
