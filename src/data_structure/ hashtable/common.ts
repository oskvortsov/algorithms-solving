export class EntryHT<K, V> {
    key: K;
    value: V;
    hash: number;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.hash = hashCode(key);
    }

    equals(other: EntryHT<K, V>) {
        if (this.hash !== other.hash) return false;
        return this.key === other.key;
    }
}

export function hashCode<K>(key: K) {
    const stroke = typeof key == 'object' ? JSON.stringify(key) : String(key);
    let hash = 0;

    for(let i = 0, h = 0; i < stroke.length; i++) {
        hash = Math.imul(31, h) + stroke.charCodeAt(i) | 0;
    }

    return hash;
}
