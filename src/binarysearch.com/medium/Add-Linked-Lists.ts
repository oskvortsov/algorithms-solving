// https://binarysearch.com/problems/Add-Linked-Lists

class LLNode {
    val: number;
    next: LLNode | null;

    constructor(val: number, next: LLNode = null) {
        this.val = val;
        this.next = next;
    }
}

class AddLinkedList {
    static solve(l0: LLNode, l1: LLNode) {
        let rL0 = l0;
        let rL1 = l1;
        let rest = 0;

        let temp = null;
        let head = null;

        while (rL0 || rL1 || rest) {
            let first = 0;
            let second = 0;

            if (rL0) {
                first = rL0.val;
                rL0 = rL0.next;
            }

            if (rL1) {
                second = rL1.val;
                rL1 = rL1.next;
            }

            let val = rest + first + second;
            rest = val > 9 ? 1 : 0;

            let node = new LLNode(val % 10);
            if (temp) {
                head.next = node;
                head = node;
            } else {
                temp = node;
                head = temp;
            }
        }

        return temp;
    }
}


console.log(AddLinkedList.solve(
    new LLNode(6, new LLNode(4)),
    new LLNode(4, new LLNode(7))
));

console.log(AddLinkedList.solve(
    new LLNode(0),
    new LLNode(0)
));

console.log(AddLinkedList.solve(
    new LLNode(8, new LLNode(1)),
    new LLNode(0)
));
