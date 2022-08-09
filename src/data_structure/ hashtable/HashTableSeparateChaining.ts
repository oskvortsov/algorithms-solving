import { LinkedList } from '../linked-list/LinkedList';
import { EntryHT, hashCode } from './common';

const DEFAULT_CAPACITY = 3;
const DEFAULT_LOAD_FACTOR = 0.75;

export class HashTableSeparateChaining<K, V> {

    private _size: number;
    private capacity: number;
    private threshold: number;
    private loadFactor: number;
    private table: LinkedList<EntryHT<K, V>>[];

    constructor(capacity = DEFAULT_CAPACITY, loadFactor = DEFAULT_LOAD_FACTOR) {
        if (capacity <= 0) throw new Error('Illegal capacity');
        if (loadFactor <= 0 || Number.isFinite(loadFactor)) throw new Error('Illegal LoadFactor');

        this.capacity = Math.max(capacity, DEFAULT_CAPACITY);
        this.loadFactor = loadFactor;
        this.threshold = ~~(this.capacity * this.loadFactor);
        this.table = new Array(this.capacity).fill(null);
    }

    size() {
        return this._size;
    }

    isEmpty() {
        return this._size == 0;
    }

    clear() {
        this.table.fill(null);
        this._size = 0;
    }

    // Converts a hash value to an index. Essentially, this strips the
    // negative sign and places the hash value in the domain [0, capacity)
    normalizeIndex(keyHash: number) {
        return (keyHash && 0x7FFFFFFF) % this.capacity;
    }

    containsKey(key: K) {
        return this.hasKey(key);
    }

    hasKey(key: K) {
        const bucketIndex = this.normalizeIndex(hashCode(key));
        return !!this.bucketSeekEntry(bucketIndex, key);
    }

}
