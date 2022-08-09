//https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/1016/
//@ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    next: TreeNode | null;

    constructor(val: number, left: TreeNode = null, right: TreeNode = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = null;
    }
}

function connect(root: TreeNode) {
    if (!root) return root;

    let trav = root.next;
    let next = null;

    while (trav) {
        if (trav.left || trav.right) {
            next = trav.left || trav.right;
            trav = null;
        } else {
            trav = trav.next;
        }
    }


    if (root.left && root.right) {
        root.left.next = root.right;
        root.right.next = next;
    } else if (root.right) {
        root.right.next = next;
    } else if (root.left) {
        root.left.next = next;
    }


    connect(root.right);
    connect(root.left);

    return root;
}


function connect1(root: TreeNode) {
    if (!root) return root;

    const queue = [root]

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (i < size - 1) node.next = queue[0] || null;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
}

const treeTest = new TreeNode(1,
    new TreeNode(
        2,
        new TreeNode(4), new TreeNode(5)
    ),
    new TreeNode(3, null, new TreeNode(7))
)
// console.log(connect(treeTest));

const treeTest2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3, null, new TreeNode(5))
)
console.log(connect1(treeTest2));
debugger;
