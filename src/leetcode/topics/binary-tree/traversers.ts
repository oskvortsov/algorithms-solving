// @ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}


// https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/
function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    let result = [];

    const queue = [root];

    while(queue.length) {
        const node = queue.pop();

        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);

        result.push(node.val);
    }

    return result;
}

// console.log('----preorderTraversal-----')
// const preorderTree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
// const preorderTree2 = new TreeNode(3, new TreeNode(2, new TreeNode(1)));
// const preorderTree3 = new TreeNode(4, new TreeNode(3, new TreeNode(2)), new TreeNode(1));
// console.log(preorderTraversal(preorderTree), [1, 2, 3]);
// console.log(preorderTraversal(preorderTree2), [3, 2, 1]);
// console.log(preorderTraversal(preorderTree3), [4, 3, 2, 1]);
// console.log('--------------------------')

function inorderTraversal(root: TreeNode | null): number[] {
    let result = [];
    let stack = [root];
    let trav = root;

    while(trav && stack.length) {
        while(trav.left) {
            trav = trav.left;
            stack.push(trav);
        }

        let node = stack.pop();
        result.push(node.val);

        if (node.right) {
            trav = node.right;
            stack.push(trav);
        }
    }

    return result;
}

// console.log('----inorderTraversal-----')
// const preorderTree3 = new TreeNode(4, new TreeNode(3, new TreeNode(2, new TreeNode(1))));
// console.log(inorderTraversal(preorderTree3), [1, 2, 3, 4]);
// console.log('--------------------------')


function morrisInOrderTraversal(root: TreeNode) {
    let cur = root;
    let result = [];

    while (cur !== null) {
        if (cur.left == null) {
            result.push(cur.val);
            cur = cur.right;
        } else {
            let pre = cur.left;
            while (pre.right !== null && pre.right !== cur) {
                pre = pre.right;
            }

            if (pre.right == null) {
                pre.right = cur;
                cur = cur.left;
            } else {
                pre.right = null;
                result.push(cur.val);
                cur = cur.right;
            }
        }
    }

    return result;
}

// console.log('----morrisTraversal-----')
// const preorderTree3 = new TreeNode(4, new TreeNode(3, new TreeNode(2, new TreeNode(1))));
// console.log(morrisInOrderTraversal(preorderTree3), [1, 2, 3, 4]);
// console.log('--------------------------')

function morrisPreOrderTraversal(root: TreeNode) {
    const result = [];
    let cur = root;

    while (cur !== null) {
        if (cur.left == null) {
            result.push(cur.val);
            cur = cur.right;
        } else {
            let pre = cur.left;
            while (pre.right !== cur && pre.right !== null) {
                pre = pre.right;
            }

            if (pre.right == null) {
                pre.right = cur;
                result.push(cur.val);
                cur = cur.left;
            } else {
                pre.right = null;
                cur = cur.right;
            }
        }
    }

    return result;
}

function postOrderTraversal(root: TreeNode): number[] {
    if (!root) return [];
    const stack = [root];
    const result = [];

    while (stack.length) {
        let node = stack.pop();

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);

        result.push(node.val);
    }

    return result.reverse();
}

console.log('----postOrderTraversal-----')
const postOrderTree1 = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1), new TreeNode(3)
    ),
    new TreeNode(6,
        new TreeNode(5), new TreeNode(7)
    )
);
console.log(postOrderTraversal(postOrderTree1), [1, 3, 2, 5, 7, 6, 4]);
console.log('--------------------------')


function postOrder(root: TreeNode, result = []) {
    if (!root) return result;
    postOrder(root.left, result);
    postOrder(root.right, result);

    result.push(root.val);
    return result;
}

function levelOrder(root: TreeNode): number[] {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const node = queue.shift();

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        result.push(node.val);
    }

    return result;
}
