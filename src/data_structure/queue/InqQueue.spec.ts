import { IntQueue } from './IntQueue';

describe('IntQueue', () => {
    let queue: IntQueue = null;
    const EmptyError = new Error("Queue is empty");
    const FullError = new Error("Queue is full");

    beforeEach(() => {
        queue = new IntQueue(3);
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

    it('isFull', () => {
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);

        expect(() => queue.offer(4)).toThrow(FullError);
    })

    it('test zero capacity', () => {
        const testQueue = new IntQueue();
        expect(() => testQueue.offer(1)).toThrow(FullError);
    })
})
