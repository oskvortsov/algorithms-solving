import { HashTableSeparateChaining } from './HashTableSeparateChaining';

class HashObject {
    readonly hash: number;
    readonly data: number;

    hasCode(): number {
        return this.hash;
    }

    equals(obj: HashObject): boolean {
        return this.hash == obj.hash && this.data == obj.data;
    }
}

describe('HashTableSeparateChaining', () => {
    const LOOPS = 500;
    const MAX_SIZE = ~~(Math.random() * 750);
    const MAX_RAND_NUM = ~~(Math.random() * 350);

    const ILLEGAL_KEY_ERROR = new Error('Illegal key');
    const ILLEGAL_CREATE_ERROR = new Error('Illegal argument exception');

    let map: HashTableSeparateChaining<number, number>;

    beforeEach(() => {
        map = new HashTableSeparateChaining<number, number>();
    })

    it('null key', () => {
        expect(() => map.put(null, 5)).toThrow(ILLEGAL_KEY_ERROR);
    })

    it('create', () => {
        expect(() => new HashTableSeparateChaining(-3, 0.5)).toThrow(ILLEGAL_CREATE_ERROR);
        expect(() => new HashTableSeparateChaining(2, Number.POSITIVE_INFINITY)).toThrow(ILLEGAL_CREATE_ERROR);
        expect(() => new HashTableSeparateChaining(2, -0.5)).toThrow(ILLEGAL_CREATE_ERROR);

        expect(new HashTableSeparateChaining()).toBeDefined();
    })

    it('updating value', () => {
        map.add(1, 1);
        expect(map.get(1)).toBe(1);

        map.add(1, 5);
        expect(map.get(1)).toBe(5);

        map.add(1, -7);
        expect(map.get(1)).toBe(-7);
    })




})
