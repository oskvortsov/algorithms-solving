// https://binarysearch.com/problems/Merging-Binary-Trees

// @ts-ignore
import * as buffer from 'buffer';

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

class MergingBinaryTrees {
    static solve(node0, node1) {
        return node1 || node0 ? mergeTrees(new Tree(0), node0, node1) : null;
    }
}

function mergeTrees(buffer, root1, root2) {
    if (!root1 && !root2) return null;

    if (root1 || root2) {
        buffer.val = (root1?.val || 0) + (root2?.val || 0);
    }

    if (!root2) {
        buffer.left = root1.left;
        buffer.right = root1.right;
    } else if (!root1) {
        buffer.left = root2.left;
        buffer.right = root2.right;
    } else {
        buffer.left = mergeTrees(new Tree(0), root1.left, root2.left);
        buffer.right = mergeTrees(new Tree(0), root1.right, root2.right);
    }

    return buffer;
}

function mergeTrees1(buffer, root1, root2) {
    if (!root1 && !root2) return buffer;

    if (root1 || root2) {
        buffer.val = (root1?.val || 0) + (root2?.val || 0);
    }

    if (root1?.left || root2?.left) {
        buffer.left = mergeTrees(new Tree(0), root1?.left, root2?.left);
    }

    if (root1?.right || root2?.right) {
        buffer.right = mergeTrees(new Tree(0), root1?.right, root2?.right);
    }

    return buffer;
}
