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

// @ts-ignore
class Solution1 {
    static solve(root) {
        return clearTree(root);
    }
}

function clearTree(root) {
    if (checkZero(root)) return null;

    if (root.left) {
        root.left = clearTree(root.left);
    }

    if (root.right) {
        root.right = clearTree(root.right);
    }

    return root;
}


function checkZero(node) {
    if (!node) return true;

    return node.val == 0
        && checkZero(node.left)
        && checkZero(node.right);
}

// console.log(Solution1.solve(new Tree(0, new Tree(1))));


class Solution2 {
    static solve(rooms) {
        let lockRooms = new Set();
        let keys = [0];

        for (let i = 0; i < rooms.length; i++) {
            lockRooms.add(i);

            for (let j = 0; j < rooms[i].length; j++) {
                let key = rooms[i][j];
                if (key !== i) keys.push(rooms[i][j]);
            }
        }

        for (let key of keys) lockRooms.delete(key);

        return lockRooms.size == 0;
    }
}
