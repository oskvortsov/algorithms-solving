// https://binarysearch.com/problems/Linked-List-Deletion

// @ts-ignore
class LLNode {
    val: number;
    next: LLNode | null;

    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

class LinkedListDeletion {
    static solve(node: LLNode, target) {
        let head = node;

        while (head) {
            let next = head.next;
            while (next?.val == target) {
                next = next.next;
            }

            head.next = next;
            head = head.next;
        }

        return node?.val == target ? node.next : node;
    }
}

console.log(
    LinkedListDeletion.solve(
        new LLNode(0, new LLNode(1, new LLNode(1, new LLNode(2)))), 1
    )
)

console.log(
    LinkedListDeletion.solve(
        new LLNode(0, new LLNode(1)), 0
    )
)
