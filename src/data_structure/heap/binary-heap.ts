class BinaryHeap<T = number> {
    private items = [];
    private mode: 'min' | 'max' = 'min';

    constructor(mode: 'min' | 'max' = 'min') {
        this.mode = mode;
    }

    public heapify(arr, n, i) {
        this.mode === 'min' ? BinaryHeap.minHeapify(arr, n, i) : BinaryHeap.maxHeapify(arr, n, i);
    }


    private static maxHeapify(arr, n, i) {
        let largest = i;
        let left = 2 * n + 1;
        let right = 2 * n + 2;

        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
        }
    }

    private static minHeapify(arr, n, i) {
        let lowest = i;
        let left = 2 * n + 1;
        let right = 2 * n + 2;

        if (left < n && arr[left] < arr[lowest]) {
            lowest = left;
        }

        if (right < n && arr[right] < arr[lowest]) {
            lowest = right;
        }

        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }

    public insert(value: T) {
        const size = this.items.length;
        this.items.push(value);

        if (size === 0) {
            return;
        }

        for (let i = ~~(this.items.length / 2 - 1); i >= 0; i--) {
            this.heapify(this.items, this.items.length, i);
        }
    }

    public delete(value: T) {
        const size = this.items.length;

        let index = 0;
        for (index = 0; index < size; index++) {
            if (this.items[index] === value) {
                break;
            }
        }

        [this.items[index], this.items[size - 1]] = [this.items[size - 1], this.items[index]];
        this.items.splice(size - 1);


        for (let i = ~~(this.items.length / 2 - 1); i >= 0; i--) {
            this.heapify(this.items, this.items.length, i);
        }
    }

    public findMax() {
        return this.items[0];
    };

    public deleteMax() {
        this.delete(this.findMax());
    }

    public extractMax() {
        const max = this.findMax();
        this.deleteMax();

        return max;
    }

    public getList() {
        return this.items;
    }

    public isEmpty() {
        return !!this.items.length;
    }
}
