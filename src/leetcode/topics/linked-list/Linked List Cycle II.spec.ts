// https://leetcode.com/problems/linked-list-cycle-ii/
import { LLNode as ListNode, createListBuArray, makeCycle, findKNode } from './index';


function detectCycle(head: ListNode | null): ListNode | null {
    let tortoise = head;
    let hare = head;

    do {
        if (!hare?.next?.next) return null;
        tortoise = tortoise.next;
        hare = hare.next.next;
    } while (hare !== tortoise);

    tortoise = head;

    while (hare !== tortoise) {
        hare = hare.next;
        tortoise = tortoise.next;
    }

    return tortoise;
}

describe('Linked List Cycle II', () => {
    it('case 1', () => {
        const input = createListBuArray([3, 2, 0, -4]);
        makeCycle(input, 2);
        let cycleNode = findKNode(input, 1);

        expect(detectCycle(input)).toBe(cycleNode);
    })

    it('case 2', () => {
        const input = createListBuArray([1, 2]);
        makeCycle(input, 1);
        let cycleNode = findKNode(input, 0);

        expect(detectCycle(input)).toBe(cycleNode);
    })

    it('case 3', () => {
        const input = createListBuArray([1]);
        expect(detectCycle(input)).toBe(null);
    })
})
