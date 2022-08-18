// https://leetcode.com/problems/merge-k-sorted-lists/

import { LLNode as ListNode, createListBuArray, compareTwoList } from './index';

function mergeTwoList(l1: ListNode, l2: ListNode) {
    let res = new ListNode(null);
    let pointer = res;

    while (l1 || l2) {
        if (!l2 || l1 && l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next
        } else {
            pointer.next = l2
            l2 = l2.next;
        }

        pointer = pointer.next;
    }

    return res.next;
}


function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    lists = lists.filter(Boolean);
    if (!lists.length) return null;

    while (lists.length > 1) {
        const buffer = [];

        for (let i = 0; i < lists.length; i += 2) {
            let L = i;
            let R = i + 1;

            if (R < lists.length) {
                buffer.push(mergeTwoList(lists[L], lists[R]))
            } else {
                buffer.push(lists[L]);
            }
        }

        lists = buffer;
    }

    return lists[0];
}

// function findMinNode(heads: Set<LLNode>) {
//     let minNode = null;
//     let minVal = Infinity;
//
//     for (let node of heads) {
//         if (minVal > node.val) {
//             minNode = node;
//             minVal = node.val;
//         }
//     }
//
//     return minNode;
// }
//
// function mergeKLists(lists: Array<LLNode | null>): LLNode | null {
//     let heads = new Set<LLNode>();
//     const result = new LLNode(null);
//     let pointer = result;
//
//     lists.forEach(head => head && heads.add(head));
//
//     while (heads.size) {
//         let node = findMinNode(heads);
//
//         if (node) {
//             let newNode = new LLNode(node.val);
//             pointer.next = newNode;
//             pointer = newNode;
//
//             heads.delete(node);
//
//             if (node.next) {
//                 node = node.next;
//                 heads.add(node);
//             }
//         }
//     }
//
//     return result.next;
// }

describe('Merge k Sorted Lists', () => {
    it('case 1', () => {
        const input: Array<ListNode> = [];
        input.push(createListBuArray([1,4,5]));
        input.push(createListBuArray([1,3,4]));
        input.push(createListBuArray([2,6]));

        const output = createListBuArray([1,1,2,3,4,4,5,6]);

        expect(compareTwoList(mergeKLists(input), output)).toBeTruthy();
    })

    it('case 2', () => {
        const input = [createListBuArray([])];
        const output = createListBuArray([]);
        expect(compareTwoList(mergeKLists(input), output)).toBeTruthy();
    })

    it('case 3', () => {
        const input = [];
        expect(mergeKLists(input)).toBeNull();
    })

    it('case 4', () => {
        const input = [createListBuArray([]), createListBuArray([1])];
        const output = createListBuArray([1]);
        expect(compareTwoList(mergeKLists(input), output)).toBeTruthy();
    })

    it('case 5', () => {
        let inputArr = [[-10,-9,-9,-3,-1,-1,0],[-5],[4],[-8],[],[-9,-6,-5,-4,-2,2,3],[-3,-3,-2,-1,0]];
        const input = inputArr.map(createListBuArray);
        const output = createListBuArray(inputArr.flatMap(i => i).sort((a, b) => a - b));
        expect(compareTwoList(mergeKLists(input), output)).toBeTruthy();
    })
})
