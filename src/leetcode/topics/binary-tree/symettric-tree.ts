// https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/536/

function isSymmetric(root: TreeNode | null): boolean {
    let queue = [root.left, root.right];

    while (queue.length) {
        const L = queue.shift();
        const R = queue.shift();

        if (L === null && R === null) continue;
        if (L == null || R === null) return false;
        if (L.val !== R.val) return false;

        queue.push(L.left);
        queue.push(R.right);

        queue.push(L.right);
        queue.push(R.left);
    }

    return true;
}
