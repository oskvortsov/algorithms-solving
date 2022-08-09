// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
import { LLNode, createListBuArray, compareTwoList } from './index';

function removeNthFromEnd(head: LLNode | null, n: number): LLNode | null {
    let tmp = new LLNode(null, head);
    let first = tmp;
    let second = tmp;

    for (let i = 0; i <= n; i++) first = first.next;

    while (first) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return tmp.next;
}

describe('Remove Nth Node From End of List', () => {
    it('case 1: remove middle', () => {
        const input = createListBuArray([1, 2, 3, 4, 5]);
        const output = createListBuArray([1, 2, 3, 5]);

        expect(
            compareTwoList(
                removeNthFromEnd(input, 2),
                output
            )
        ).toBeTruthy();
    })

    it('case 2: remove first', () => {
        const input = createListBuArray([1, 2, 3, 4, 5]);
        const output = createListBuArray([2, 3, 4, 5]);

        expect(
            compareTwoList(
                removeNthFromEnd(input, 5),
                output
            )
        ).toBeTruthy();
    })

    it('case 3: remove last', () => {
        const input = createListBuArray([1, 2, 3, 4, 5]);
        const output = createListBuArray([1, 2, 3, 4]);

        expect(
            compareTwoList(
                removeNthFromEnd(input, 1),
                output
            )
        ).toBeTruthy();
    })
});
