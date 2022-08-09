// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/994/
//@ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    next: TreeNode | null;
}

// @ts-ignore
function connect(root: TreeNode | null): TreeNode | null {
    if (!root) return root;

    const queue = [root];
    let level = 0;
    let levelSize = 1;

    while (queue.length) {
        const node = queue.shift();
        levelSize--;

        if (levelSize == 0) {
            levelSize = Math.pow(2, ++level);
        } else {
            node.next = queue[0];
        }

        if (node.left) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return root;
}

function connectRecursion(root: TreeNode) {
    if (!root) return null;

    if (!root.left) return root;

    root.left.next = root.right;
    if (root.next) {
        root.right.next = root.next.left;
    }

    connectRecursion(root.left);
    connectRecursion(root.right);

    return root;
}
