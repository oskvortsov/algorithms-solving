import { Heap } from './Heap';

describe('Heap', () => {
    const MAX_SIZE = 10000;
    const MAX_VALUE = 999999999;
    const MAX_SORT = (a, b) => a == b ? 0 : a > b ? -1 : 1;
    const MAX_HEAP_COMPARE_FN = (a, b) => a > b;

    let heap: Heap<number> = null;

    beforeEach(() => {
        heap = new Heap<number>();
    })

    it('isEmpty', () => {
        expect(heap.isEmpty()).toBeTruthy();
        heap.add(1);
        heap.add(2);
        expect(heap.isEmpty()).toBeFalsy();
    })

    it('size', () => {
        expect(heap.size()).toBe(0);

        heap.add(1);
        heap.add(2);
        expect(heap.size()).toBe(2);

        heap.remove(2);
        expect(heap.size()).toBe(1)
    })

    it('peek', () => {
        expect(heap.peek()).toBeNull();

        heap.add(2);
        expect(heap.peek()).toBe(2);

        heap.add(1);
        expect(heap.peek()).toBe(1);

        heap.add(3);
        expect(heap.peek()).toBe(1);
    })

    it('poll', () => {
        expect(heap.poll()).toBeNull();

        const testArr = [2, 3, 1, 4];
        const sortArr = [1, 2, 3, 4];
        for (let num of testArr) heap.add(num);

        for (let i = 0, size = testArr.length; i < testArr.length; i++) {
            expect(heap.poll()).toBe(sortArr[i]);
            expect(heap.size()).toBe(--size);
        }

        expect(heap.isEmpty()).toBeTruthy();
    })

    it('contains', () => {
        expect(heap.contains(null)).toBeFalsy();
        expect(heap.contains(2)).toBeFalsy();

        heap.add(2);
        heap.add(3);
        heap.add(1);
        expect(heap.contains(3)).toBeTruthy();

        heap.remove(3);
        expect(heap.contains(3)).toBeFalsy();
    })

    it('indexOf', () => {
        expect(heap.indexOf(1984)).toBeNull();

        heap.add(198);
        expect(heap.indexOf(1984)).toBeNull();

        heap.add(1984);
        expect(heap.indexOf(198)).toBe(0);
        expect(heap.indexOf(1984)).toBe(1);
    })

    it('remove', () => {
        expect(heap.remove(666)).toBeFalsy();

        heap.add(1);
        heap.add(2);
        heap.add(3);
        expect(heap.remove(4)).toBeFalsy();

        expect(heap.size()).toBe(3);
        expect(heap.contains(2)).toBeTruthy()

        expect(heap.remove(2)).toBeTruthy();
        expect(heap.size()).toBe(2);
        expect(heap.contains(2)).toBeFalsy()
    })

    it('maxHeap: base case', () => {
        const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const sortArr = [...testArr].sort(MAX_SORT);

        const maxHeap = new Heap(10, MAX_HEAP_COMPARE_FN);
        for (let num of testArr) maxHeap.add(num);
        for (let num of sortArr) {
            expect(maxHeap.poll()).toBe(num);
        }
    })

    it('maxHeap: random big array', () => {
        const testArr = getRandomArr(MAX_SIZE);
        const sortArr = testArr.sort(MAX_SORT);

        const heap = new Heap(MAX_SIZE, MAX_HEAP_COMPARE_FN);
        for (let num of testArr) heap.add(num);
        for (let num of sortArr) expect(heap.poll()).toBe(num);
    })

    function getRandomArr(size: number = 10) {
        const arr = new Array(size);

        for (let i = 0; i < arr.length; i++) {
            arr[i] = ~~(Math.random() * MAX_VALUE);
        }

        return arr;
    }
})
