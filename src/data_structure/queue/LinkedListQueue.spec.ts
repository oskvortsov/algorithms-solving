import { LinkedListQueue } from './LinkedListQueue';

describe('LinkedListQueue', () => {
    let queue: LinkedListQueue<number> = null;
    const EmptyError = new Error("Empty Queue");

    beforeEach(() => {
        queue = new LinkedListQueue<number>();
    })

    it('isEmpty', () => {
        expect(queue.isEmpty()).toBeTruthy();
        queue.offer(1);
        expect(queue.isEmpty()).toBeFalsy();
    })

    it('size', () => {
        expect(queue.size).toBe(0);

        queue.offer(1);
        queue.offer(2);
        queue.offer(3);

        expect(queue.size).toBe(3);
    })

    it('offer', () => {
        expect(queue.isEmpty()).toBeTruthy();

        queue.offer(1);
        expect(queue.size).toBe(1);
    })

    it('poll', () => {
        expect(() => queue.poll()).toThrow(EmptyError);

        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        expect(queue.poll()).toBe(1);
        expect(queue.poll()).toBe(2);
        expect(queue.poll()).toBe(3);
        expect(queue.isEmpty()).toBeTruthy();
    })

    it('peek', () => {
       expect(() => queue.peek()).toThrow(EmptyError);

        queue.offer(1);
        queue.offer(2);

        expect(queue.peek()).toBe(1);
        expect(queue.peek()).toBe(1);
        expect(queue.isEmpty()).toBeFalsy();
    })

    it('iterable', () => {
        const testArray = [1, 9, 8, 4];
        testArray.forEach(num => queue.offer(num));

        let index = 0;

        for (let i of queue) {
            expect(i).toBe(testArray[index++])
        }
    })
})
