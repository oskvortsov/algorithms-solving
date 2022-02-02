// https://binarysearch.com/problems/Inverted-Subtree
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

class InvertedSubtree {
    static solve(source: Tree, target: Tree) {
        if (!source || !target) return !source && !target;

        return compare(target, source, source);
    }
}

function compare(node, current, source) {
    if (!node) return node == current;

    let result = node.val == current.val;

    if (result) {
        result = compare(node.left, current.right, source);
        result = compare(node.right, current.left, source);
    } else {
        result = compare(node.left, source, source);
        result = compare(node.right, source, source);
    }

    return result;
}
