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

class SearchInBinaryTree {
    static solve(root, target) {
        let head = root;
        let path = [target];
        let t = target;

        while (t) {
            t >>= 1;
            t && path.push(t);
        }

        let current = path.pop();

        while (head) {
            if (head.val == target) return true;
            if (head.val !== current) return false;

            current = path.pop();
            head = head.left?.val == current ? head.left : head.right;
        }

        return false;
    }
}

console.log(SearchInBinaryTree.solve(
    new Tree(1,
        new Tree(2, new Tree(4)),
        new Tree(3, new Tree(6), new Tree(7))
    ),
7));
