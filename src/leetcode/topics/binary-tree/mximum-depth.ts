//https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/535/
function maxDepth(root: TreeNode | null): number {
    if (root == null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

