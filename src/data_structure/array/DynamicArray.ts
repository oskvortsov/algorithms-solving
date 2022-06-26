export class DynamicArray<T> {
    private items: Array<T> = [];
    private len = 0;
    private capacity = 0;

    constructor(capacity = 16) {
        if (capacity < 0) {
            throw Error('Wrong Capacity: ' + capacity);
        }

        this.items = new Array<T>(capacity).fill(undefined);
        this.capacity = capacity;
    }

    get size() {
        return this.len;
    }

    public get(index: number): T {
        if (index < 0 || index >= this.len) {
            throw Error('Index Out Array');
        }

        return this.items[index];
    }

    public set(index: number, value: T) {
        if (index < 0 || index >= this.len) {
            throw Error('Index Out Array');
        }

        this.items[index] = value;
    }

    public clear() {
        for (let i = 0; i < this.len; i++) this.items[i] = undefined;
        this.len = 0;
    }

    public add(val: T) {
        if (this.len + 1 >= this.capacity) {
            if (this.capacity == 0) {
                this.capacity = 1;
            } else {
                this.capacity *= 2;
            }

            const newArr = new Array(this.capacity).fill(undefined);
            for (let i = 0; i < this.len; i++) newArr[i] = this.items[i];

            this.items = newArr;
        }

        this.items[this.len++] = val;
    }

    public removeAt(index: number): T {
        if (index < 0 || index >= this.len) {
            throw Error('Index Out Array');
        }

        const data = this.items[index];
        const newArr = new Array(this.len - 1).fill(undefined);

        for (let i = 0, j = 0; i < this.len; i++, j++) {
            if (i == index) {
                j--
            } else {
              newArr[j] = this.items[i];
            }
        }

        this.items = newArr;
        this.capacity = --this.len;

        return data;
    }

    public remove(obj): boolean {
        const index = this.indexOf(obj);

        if (index == -1) return false;
        this.removeAt(index);

        return true;
    }

    public indexOf(obj): number {
        for (let i = 0; i < this.len; i++) {
            if (this.items[i] === obj) return i;
        }

        return -1;
    }

    public isEmpty() {
        return this.size === 0;
    }

    public contains(obj) {
        return this.indexOf(obj) !== -1;
    }

    [Symbol.iterator]() {
        let index = -1;
        let data = this.items;
        let len = this.len;

        return {
            next: () => ({
                value: data[++index],
                done: index >= len,
            })
        }
    }

    toString() {
        if (this.len == 0) return '[]';

        let buffer = '[';

        for (let i = 0; i < this.len - 1; i++) {
            buffer += `${this.items[i]}, `;
        }

        return buffer + `${this.items[this.len - 1]}]`
    }
}
