//https://binarysearch.com/problems/Replace-Linked-List-on-Index

// @ts-ignore
class LLNode {
    val: number;
    next: LLNode | null;

    constructor(val: number, next: LLNode = null) {
        this.val = val;
        this.next = next;
    }
}

class ReplaceLinkedListOnIndex {
    static solve(a: LLNode, b: LLNode, lo:number, hi: number) {
        let index = 0;
        let node = a;
        let start = lo ? a : null;
        let end = a;

        while (node && index <= hi) {
            index++;
            if (index < lo)  start = node.next;
            end = node.next;
            node = node.next;
        }

        if (!start) {
            a = b;
            b = b.next;
        }

        while (b) b = b.next;





        return [start, end];
    }
}


console.log(
    ReplaceLinkedListOnIndex.solve(
        new LLNode(1, new LLNode(2, new LLNode(3, new LLNode(4)))),
        new LLNode(10, new LLNode(20, new LLNode(30))),
        0,
        2
    )
)
