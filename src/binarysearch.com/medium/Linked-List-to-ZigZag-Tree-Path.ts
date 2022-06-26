// https://binarysearch.com/problems/Linked-List-to-ZigZag-Tree-Path
//@ts-ignore
class Tree {
    val: any;
    left: Tree | null;
    right: Tree | null;

    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

//ts-ignore
class LLNode {
    val: any;
    next: LLNode;

    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedListToZigZagTreePath {
    static solve(node: LLNode) {
        if (!node) return null;

        let root = new Tree(node.val);
        let head = root;
        node = node.next;

        while (node) {
            let newLeast = new Tree(node.val);
            node.val < head.val ? head.left = newLeast : head.right = newLeast;

            head = newLeast;
            node = node.next;
        }

        return root;
    }
}


