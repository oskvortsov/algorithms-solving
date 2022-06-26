import { DynamicArray } from './DynamicArray';

const OutOfArrayError = new Error('Index Out Array');
const WrongCapacityError = new Error('Wrong Capacity: -1');

describe('DynamicArray tests', () => {
    it ('create list with negative size', () => {
        expect(() => new DynamicArray(-1)).toThrow(WrongCapacityError);
    })

    it('empty list', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        expect(list.isEmpty()).toBeTruthy();
    })

    it('remove empty', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        expect(() => list.removeAt(0)).toThrow(OutOfArrayError);
    })

    it('index out of array', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        list.add(1);
        list.add(2);
        list.add(3);
        expect(() => list.removeAt(3)).toThrow(OutOfArrayError);
    })

    it('index out of array - 2', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 1000; i++) list.add(i + i);
        expect(() => list.removeAt(1000)).toThrow(OutOfArrayError);
    })

    it('index out of array - 3', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 20; i++) list.add(i);
        expect(() => list.removeAt(20)).toThrow(OutOfArrayError);
    })

    it('index out of array - 4', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        list.add(1);
        expect(() => list.removeAt(-1)).toThrow(OutOfArrayError);
    })

    it('index out of array - 5', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 10; i++) list.add(i);
        expect(() => list.removeAt(-666)).toThrow(OutOfArrayError);
    })

    it('index out of array - 6', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 10; i++) list.add(12);
        expect(() => list.set(10, 3)).toThrow(OutOfArrayError);
    })

    it('index out of array - 7', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 10; i++) list.add(12);
        expect(() => list.set(15, 3)).toThrow(OutOfArrayError);
    })

    it('index out of array - 8', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 10; i++) list.add(i);
        expect(() => list.get(-2)).toThrow(OutOfArrayError);
    })

    it('index out of array - 9', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 10; i++) list.add(i);
        expect(() => list.get(10)).toThrow(OutOfArrayError);
    })

    it('index out of array - 10', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        for (let i = 0; i < 10; i++) list.add(i);
        expect(() => list.get(20)).toThrow(OutOfArrayError);
    })

    it('removing', () => {
        const list: DynamicArray<string> = new DynamicArray<string>();
        const strArr = ['m', 'a', 'r', 'v', 'e', 'l', null];

        for (let symbol of strArr) list.add(symbol);

        expect(list.remove('m')).toBeTruthy();
        expect(list.remove('a')).toBeTruthy();
        expect(list.remove('r')).toBeTruthy();
        expect(list.remove('v')).toBeTruthy();
        expect(list.remove('e')).toBeTruthy();
        expect(list.remove('l')).toBeTruthy();
        expect(list.remove(null)).toBeTruthy();
        expect(list.remove('not exist value')).toBeFalsy();
    })

    it ('removing 2', () => {
        const list: DynamicArray<string> = new DynamicArray<string>();
        const strArr = ['1', '9', '8', '4'];

        for (let symbol of strArr) list.add(symbol);

        expect(list.remove('1')).toBeTruthy();
        expect(list.remove('9')).toBeTruthy();
        expect(list.remove('8')).toBeTruthy();
        expect(list.remove('4')).toBeTruthy();

        expect(list.remove('1')).toBeFalsy();
        expect(list.remove('9')).toBeFalsy();
        expect(list.remove('8')).toBeFalsy();
        expect(list.remove('4')).toBeFalsy();
    })

    it('index if null element', () => {
        const list: DynamicArray<string> = new DynamicArray<string>();
        const strArr = ['1', '9', '8', null, '4'];

        for (let symbol of strArr) list.add(symbol);

        expect(list.indexOf(null)).toBe(3);
    })

    it('adding elements', () => {
        const list: DynamicArray<number> = new DynamicArray<number>();
        const testArr = [1, 2, 3, 4, 5];
        for (let i of testArr) list.add(i);

        for (let i = 0; i < list.size; i++) expect(list.get(i)).toBe(testArr[i]);
    })

    it('removing and adding', () => {
        const list: DynamicArray<number> = new DynamicArray();
        for (let i = 0; i < 64; i++) list.add(1000);
        for (let i = 0; i < 64; i++) list.set(i, 2000);
        for (let i = 0; i < 64; i++) list.remove(2000);
        expect(list.isEmpty()).toBeTruthy();


        for (let i = 0; i < 155; i++) list.add(155);
        for (let i = 0; i < 155; i++) list.set(i, 255);
        for (let i = 0; i < 155; i++) list.removeAt(0);
        expect(list.isEmpty()).toBeTruthy();
    })

    it('size', () => {
        const list = new DynamicArray<number>();
        const testArr = [1, 2, 3, 4, 5];

        for (let i = 0, size = 1; i < testArr.length; i++, size++) {
            list.add(testArr[i]);
            expect(list.size).toBe(size);
        }
    })


    it('clear', () => {
        const list = new DynamicArray<number>();
        const testArr = [1, 2, 3, 4, 5];

        for (let i of testArr) list.add(i);
        expect(list.size).toBe(testArr.length);

        list.clear();
        expect(list.size).toBe(0)
    })

    it('contain', () => {
        const list = new DynamicArray<number>();
        const testArr = [1, 2, 3, 4, 5];

        for (let i of testArr) {
            list.add(i);
            expect(list.contains(i)).toBeTruthy()
        }

    })

    it('iterator', () => {
        const list = new DynamicArray<number>();
        const testArr = [1, 2, 3, 4, 5];
        for (let i of testArr) list.add(i);

        let index = 0;

        debugger;
        for (let i of list) {
            expect(list.get(index)).toBe(testArr[index]);
            index++;
        }
    })

    it('toString', () => {
        const list = new DynamicArray<string>();
        expect(list.toString()).toBe('[]');

        const testArr = ['1', '9', '8', '4'];
        for (let i of testArr) list.add(i);

        expect(list.toString()).toBe('[1, 9, 8, 4]');
        expect(list + ' - George Orwell').toBe('[1, 9, 8, 4] - George Orwell')
    })
})
