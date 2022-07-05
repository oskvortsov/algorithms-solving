export class PriorityQueueBHeap<T> {
    // The number of elements currently inside the heap
    private heapSize = 0;

    // The internal capacity of the heap
    private heapCapacity = 0;

    // A dynamic list to track the elements inside the heap
    private heap: Array<T> = [];

    // This map keeps track of possible indices a particular node value is found in the heap.
    private map: Map<T, Set<number>> = new Map<T, Set<number>>();

    constructor(elems: Array<T>) {
        this.heapSize = this.heapCapacity = elems.length;
        this.heap = [...elems];

        // Heapify process O(n)
        for (let i = Math.max(0, (this.heapSize / 2) - 1); i >= 0; i--) {
            this.sink(i);
        }
    }

    isEmpty() {
        return this.heapSize === 0;
    }

    clear() {
        for (let i = 0; i < this.heapCapacity; i++) {
            this.heap[i] = null;
        }
        this.heapSize = 0;
        this.map.clear();
    }

    get size() {
        return this.heapSize;
    }

    peek(): T {
        if (this.isEmpty()) return null;
        return this.heap[0];
    }

    poll(): T {
        return this.removeAt(0);
    }

    contains(elem: T) {
        if (elem === null) return false;
        return this.map.has(elem);
    }

    add(elem: T) {
        if (elem === null) throw new Error('Illegal argument');

        if (this.heapSize < this.heapCapacity) {
            this.heap[this.heapSize] = elem;
        } else {
            this.heap.push(elem);
            this.heapCapacity++;
        }

        this.mapAdd(elem, this.heapSize);
        this.swim(this.heapSize)
        this.heapSize++;
    }

    private less(i: number, j: number) {
        return this.heap[i] <= this.heap[j];
    }

    private swim(k: number) {
        // Grab the index of the next parent node WRT to K
        let parent = Math.trunc((k - 1) / 2);

        while (k > 0 && this.less(k, parent)) {
            this.swap(parent, k);
            k = parent;
            parent = Math.trunc((k - 1) / 2);
        }
    }

    // Top down node sink, O(log(n))
    private sink(k: number) {
        while (true) {
            let left = 2 * k + 1;
            let right = 2 * k + 2;
            let smallest = left;

            // Find which is smaller left or right
            if (right < this.heapSize && this.less(right, left)) {
                smallest = right;
            }

            if (left >= this.heapSize || this.less(k, smallest)) break;

            this.swap(smallest, k);
            k = smallest;
        }
    }

    private swap(i: number, j: number) {
        const iElem = this.heap[i];
        const jElem = this.heap[j];

        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        this.mapSwap(iElem, jElem, i, j);
    }

    remove(elem: T): boolean {
        if (elem === null) return false;

        const index = this.mapGet(elem);
        if (index !== null) this.removeAt(index);

        return index !== null;
    }

    private removeAt(index: number): T {
        if (this.isEmpty()) return null;

        this.heapSize--;
        const removeData = this.heap[index];
        this.swap(index, this.heapSize);

        // Obliterate the value
        this.heap[this.heapSize] = null;
        this.mapRemove(removeData, this.heapSize);


        // Removed the last element
        if (index === this.heapSize) return removeData;

        let elem = this.heap[index];

        // Try sinking element
        this.sink(index);

        // If sinking did not work try swimming
        if (this.heap[index] === elem) {
            this.swim(index)
        }

        return removeData;
    }

    isMinHeap(k: number): boolean {
        if (k >= this.heapSize) return true;

        const left = 2 * k + 1;
        const right = 2 * k + 2;

        if (left < this.heapSize && !this.less(k, left)) return false;
        if (right < this.heapSize && !this.less(k, right)) return false;

        return this.isMinHeap(left) && this.isMinHeap(right);
    }

    private mapAdd(value: T, index: number) {
        let set: Set<number> = this.map.get(value);

        if (set === null) {
            set = new Set<number>();
            set.add(index);
            this.map.set(value, set);
        } else {
            set.add(index);
        }
    }

    private mapRemove(value: T, index: number) {
        let set = this.map.get(value);
        set.delete(index);
        if (set.size === 0) this.map.delete(value);
    }

    private mapGet(value: T) {
        let set = this.map.get(value);
        if (set) return [...set.values()][set.size - 1];
        return null;
    }

    private mapSwap(val1: T, val2: T, val1Index: number, val2Index: number) {
        let set1 = this.map.get(val1);
        let set2 = this.map.get(val2);

        set1.delete(val1Index);
        set2.delete(val2Index);

        set1.add(val2Index);
        set2.add(val1Index);
    }
}
