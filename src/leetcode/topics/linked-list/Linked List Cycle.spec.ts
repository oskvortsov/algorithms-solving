// https://leetcode.com/problems/linked-list-cycle/
import { LLNode, createListBuArray, makeCycle } from './index';

function hasCycle(head: LLNode | null): boolean {
    if (!head) return false;

    let slow = head;
    let fast = head.next;

    while (slow && fast && fast.next) {
        if (slow == fast) return true;

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}

describe('hasCycle', () => {
    it('case 1', () => {
        let list = createListBuArray([3, 2, 0, -4]);
        makeCycle(list, 1);

        expect(hasCycle(list)).toBeTruthy();
    })

    it('case 2', () => {
        let list = createListBuArray([1, 2]);
        makeCycle(list, 0);

        expect(hasCycle(list)).toBeTruthy();
    })

    it('case 3', () => {
        let list = createListBuArray([1]);
        makeCycle(list, -1);

        expect(hasCycle(list)).toBeFalsy();
    })

    it('case 4', () => expect(hasCycle(null)).toBeFalsy());
})
