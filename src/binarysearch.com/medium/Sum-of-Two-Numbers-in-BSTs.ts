// https://binarysearch.com/problems/Sum-of-Two-Numbers-in-BSTs
//@ts-ignore
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

class SumOfTwoNumbersInBSTs {
    static solve(a: Tree, b: Tree, target: number) {
        return solve(a, b, target);
    }
}

function solve(a, b, target) {
    if (!a || !b) return false;
    if (a.val + b.val === target) return true;
    if (a.val + b.val > target) return solve(a.left, b, target) || solve(a, b.left, target);
    return solve(a.right, b, target) || solve(a, b.right, target);
}

class SumOfTwoNumbersInBSTs1 {
    static solve(a: Tree, b: Tree, target) {
        let setB = new Set();

        let queue = [b];

        while(queue.length) {
            let node = queue.pop();
            setB.add(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        queue = [a];
        while (queue.length) {
            let node = queue.pop();
            if (setB.has(target - node.val)) {
                return true;
            }

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        return false;

    }
}

function find(root, target, set) {
    if (!root) return false;
    if (set.has(target - root.val)) return true;

    return find(root.left, target, set) || find(root.right, target, set);
}
