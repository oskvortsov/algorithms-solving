// https://binarysearch.com/problems/Leaves-in-Same-Level

// @ts-ignore
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

class LeavesInSameLevel {
    static solve(root: Tree) {
        return new Set(dfs(root)).size == 1;
    }
}

function dfs(node, count = 0, levels = []) {
    if (!node.left && !node.right) {
        levels.push(count);
        return levels;
    }

    node.left && dfs(node.left, count + 1, levels);
    node.right && dfs(node.right, count + 1, levels);

    return levels;
}


console.log(
    LeavesInSameLevel.solve(
        new Tree(
            3,
            new Tree(4, null, new Tree(2)),
            new Tree(1, new Tree(1), null),
        )
    )
)

console.log(
    LeavesInSameLevel.solve(
        new Tree(
            1,
            new Tree(2),
            new Tree(3, null, new Tree(4)),
        )
    )
)
