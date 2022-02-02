// https://binarysearch.com/problems/Next-Greater-Element-of-a-Linked-List
class LLNode {
    val: any;
    next: LLNode;

    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class NextGreaterElementOfALinkedList {
    static solve(node: LLNode) {
        let head = node;

        while (head) {
            let pointer = head;

            while (head.val >= pointer?.val) {
                pointer = pointer.next;
            }

            let val = pointer?.val || 0;

            if (pointer) {
                while (head !== pointer) {
                    head.val = val > head.val ? val : 0;
                    head = head.next;
                }
            } else {
                head.val = val > head.val ? val : 0;
                head = head?.next;
            }
        }

        return node;
    }
}

// 4 -> 4 -> 5 -> 0
console.log(NextGreaterElementOfALinkedList.solve(
    new LLNode(3, new LLNode(2, new LLNode(4, new LLNode(5)))),
))

// 0 -> 1 -> 1
console.log(NextGreaterElementOfALinkedList.solve(
    new LLNode(2, new LLNode(0, new LLNode(1))),
))

//2 -> 1 -> 2 -> 0
console.log(NextGreaterElementOfALinkedList.solve(
    new LLNode(1, new LLNode(0, new LLNode(1, new LLNode(2))))),
))

//2 -> 1 -> 0 -> 1 -> 3


