import { Heap } from './Heap';

describe('Heap', () => {
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
})
