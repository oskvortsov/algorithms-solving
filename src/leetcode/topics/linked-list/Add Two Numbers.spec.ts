//https://leetcode.com/problems/add-two-numbers/

import { LLNode, createListBuArray, compareTwoList } from './index';

function addTwoNumbers(l1: LLNode | null, l2: LLNode | null): LLNode | null {
    let answer: LLNode = null;
    let head = answer;
    let rest = 0;

    while (l1 || l2 || rest) {
        let val = rest;

        if (l1) {
            val += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            val += l2.val;
            l2 = l2.next;
        }

        if (val > 9) {
            rest = 1;
            val %= 10;
        } else {
            rest = 0;
        }

        const node = new LLNode(val);
        if (!head) {
            answer = node;
            head = answer;
        } else {
            head.next = node;
            head = head.next;
        }
    }

    return answer;
}

describe('addTwoNumbers', () => {
    it('case 1', () => {
        const first = createListBuArray([2, 4, 3]);
        const second = createListBuArray([5, 6, 4])
        const output = createListBuArray([7, 0, 8]);

        expect(
            compareTwoList(
                addTwoNumbers(first, second),
                output
            )
        ).toBeTruthy();
    })

    it('case 2', () => {
        const first = createListBuArray([0]);
        const second = createListBuArray([0])
        const output = createListBuArray([0]);

        expect(
            compareTwoList(
                addTwoNumbers(first, second),
                output
            )
        ).toBeTruthy();
    })

    it('case 3', () => {
        const first = createListBuArray([9,9,9,9,9,9,9]);
        const second = createListBuArray([9,9,9,9])
        const output = createListBuArray([8,9,9,9,0,0,0,1]);

        expect(
            compareTwoList(
                addTwoNumbers(first, second),
                output
            )
        ).toBeTruthy();
    })
})
