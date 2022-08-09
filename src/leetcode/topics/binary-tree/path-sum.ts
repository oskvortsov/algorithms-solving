// https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/537/

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    if (root.val == targetSum && !root.left && !root.right) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
