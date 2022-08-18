// https://leetcode.com/problems/reverse-nodes-in-k-group/
import { LLNode, createListBuArray, compareTwoList } from './index';

function reverseK(head: LLNode, k: number) {
    let cur = head;
    let prev = null;
    let next = head.next;

    while (k--) {
        cur.next = prev;
        prev = cur;
        cur = next;
        next = next?.next;
    }

    return prev;
}

function reverseKGroup(head: LLNode | null, k: number): LLNode | null {
    let newHead = null;
    let cur = head;
    let tail = null;

    while (cur) {
        cur = head;

        let count = 0;

        while (count < k && cur) {
            cur = cur.next;
            count++;
        }

        if (count == k) {
            let revHead = reverseK(head, k);

            if (!newHead) newHead = revHead;
            if (tail) tail.next = revHead;

            tail = head;
            head = cur;
        }
    }

    if (tail) tail.next = head;

    return newHead;
}

describe('Reverse Nodes in k-Group', () => {
    it('case 1', () => {
        const input = createListBuArray([1, 2, 3, 4, 5]);
        const output = createListBuArray([2, 1, 4, 3, 5]);

        expect(compareTwoList(reverseKGroup(input, 2), output)).toBeTruthy();
    })

    it('case 2', () => {
        const input = createListBuArray([1, 2, 3, 4, 5]);
        const output = createListBuArray([3, 2, 1, 4, 5]);

        expect(compareTwoList(reverseKGroup(input, 3), output)).toBeTruthy();
    })

    it('case 3', () => {
        const input = createListBuArray([1, 2, 3, 4, 5, 6]);
        const output = createListBuArray([3, 2, 1, 6, 5, 4]);

        expect(compareTwoList(reverseKGroup(input, 3), output)).toBeTruthy();
    })
})
