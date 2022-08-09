// https://leetcode.com/problems/reorder-list/
import { compareTwoList, createListBuArray, LLNode } from './index'

function findMiddleNode(head: LLNode | null): LLNode {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function reverseList(head: LLNode | null): LLNode {
    let node = head;
    let next = head;
    let prev = null;

    while (node) {
        next = next.next;

        node.next = prev;
        prev = node;
        node = next;
    }

    return prev;
}

function mergeTwoList(first: LLNode, second: LLNode) {
    while(second.next) {
        let temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
        debugger;
    }
}


function reorderListSpec2(head: LLNode | null): void {
    mergeTwoList(head, reverseList(findMiddleNode(head)));
}

function reorderList3(head: LLNode | null): void {
    // find middle
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse from middle to end
    let tmp = slow;
    let next = slow;
    let prev = null;
    while (tmp) {
        next = next.next;

        tmp.next = prev;
        prev = tmp;
        tmp = next;
    }

    let first = head; let second = prev;
    // merge list
    while (second.next) {
        let tmp = first.next;
        first.next = second;
        first = tmp;

        tmp = second.next;
        second.next = first;
        second = tmp;
    }
}

function reorderListSpec(head: LLNode | null): void {
    const buffer = [];

    let node = head;
    while (node) {
        buffer.unshift(node);
        node = node.next;
    }

    node = head;
    let next = node.next;

    for (let i = 0; i < ~~(buffer.length / 2); i++) {
        node.next = buffer[i];
        buffer[i].next = next;
        node = next;
        next = next.next;
    }

    node.next = null;
}

describe('Reorder Linked List', () => {

    it('case 1', () => {
        let input = createListBuArray([1, 2, 3, 4]);
        let output = createListBuArray([1, 4, 2, 3]);

        // reorderListSpec(input);
        reorderListSpec2(input);

        expect(compareTwoList(input, output)).toBeTruthy();
    })

    it('case 2', () => {
        let input = createListBuArray([1, 2, 3, 4, 5]);
        let output = createListBuArray([1, 5, 2, 4, 3]);

        reorderListSpec(input);

        expect(compareTwoList(input, output)).toBeTruthy();
    })
})
