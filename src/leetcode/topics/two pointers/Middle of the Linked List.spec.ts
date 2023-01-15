// https://leetcode.com/problems/middle-of-the-linked-list/
import { createListBuArray, compareTwoList, LLNode as ListNode } from '../linked-list';

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head.next;

    while (fast) {
        slow = slow.next
        fast = fast.next?.next;
    }

    return slow;
}

describe('Middle of the Linked List', () => {
    it('case 1', () => {
        let middle = middleNode(createListBuArray([1,2,3,4,5]));
        let output = createListBuArray([3, 4, 5]);
        expect(compareTwoList(middle, output)).toBeTruthy();
    })

    it('case 2', () => {
        let middle = middleNode(createListBuArray([1,2,3,4,5,6]));
        let output = createListBuArray([4, 5, 6]);
        expect(compareTwoList(middle, output)).toBeTruthy();
    })
})
