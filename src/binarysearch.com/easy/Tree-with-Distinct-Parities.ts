// https://binarysearch.com/problems/Tree-with-Distinct-Parities

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

class TreeWithDistinctParities {
    static solve(root: Tree) {
        const res = { count: 0 };
        dfs(root, res);

        return res.count;
    }
}

function dfs(node, result) {
    if (!node) return 0;

    let lSum = dfs(node.left, result);
    let rSum = dfs(node.right, result);

    if (node.left && node.right) {
        result.count += (rSum & 1) ^ (lSum & 1);
    }

    return node.val + lSum + rSum;
}

console.log(
    TreeWithDistinctParities.solve(
        new Tree(1,
            new Tree(5),
            new Tree(3, new Tree(4), new Tree(7))
        )
    )
)
