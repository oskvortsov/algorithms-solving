export class Heap<T> {
    private data: Array<T> = null;
    private _size;
    private capacity: number;

    constructor(capacity = 1) {
        this.data = new Array(capacity);
        this.capacity = capacity;
        this._size = 0;
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size === 0;
    }

    peek(): T {
        if (this.isEmpty()) return null;
        return this.data[0];
    }

    poll(): T {
        if (this.isEmpty()) return null;
        return this.removeAt(0);
    }

    contains(elem: T): boolean {
        if (elem === null) return false;

        return this.data.some(value => value == elem);
    }

    add(elem: T) {
        if (this._size < this.capacity) {
            this.data[this._size] = elem;
        } else {
            this.data.push(elem);
            this.capacity++;
        }

        this.heapifyUp(this._size);
        this._size++;
    }

    indexOf(elem: T) {
        if (this.isEmpty()) return null;

        const index = this.data.indexOf(elem);
        return index == -1 ? null : index;
    }

    remove(elem: T): boolean {
        if (this.isEmpty()) return false;

        const index = this.indexOf(elem);
        if (index !== null) this.removeAt(index);

        return index !== null;
    }

    private removeAt(index: number): T {
        const removeData = this.data[index];

        this._size--
        this.swap(index, this._size);
        this.data[this._size] = null;

        if (this._size == index) {
            return removeData;
        }

        let elem = this.data[index];

        this.hepifyDown(index);

        if (this.data[index] == elem) {
            this.heapifyUp(index);
        }

        return removeData;
    }

    private heapifyUp(k: number) {
            let parentNode = Math.max(0, ~~((k - 1) / 2));

            while (k >= 0 && this.compare(k, parentNode)) {
                this.swap(k, parentNode);
                k = parentNode;
                parentNode = Math.max(0, ~~((k - 1) / 2))
            }
    }

    private hepifyDown(k: number) {
        while (true) {
            let left = 2 * k + 1;
            let right = 2 * k + 2;
            let smallest = left;

            if (right < this._size && this.compare(right, left)) smallest = right;
            if (left >= this._size || this.compare(k, smallest)) break;

            this.swap(k, smallest);
            k = smallest;
        }
    }

    private swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    private compare(i, j) {
        return this.data[i] < this.data[j];
    }

}
