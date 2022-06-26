// https://binarysearch.com/problems/Counting-Maximal-Value-Roots-in-Binary-Tree

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

class CountingMaximalValueRootsInBinaryTree {
  static solve(root: Tree) {
      return root && countNode(root, 0) || 0;
  };
}

function countNode(node, count) {
    if (node.val >= ((node.left?.val || 0) + (node.right?.val || 0))) count++;

    if (node.left) {
        count = countNode(node.left, count);
    }

    if (node.right) {
        count = countNode(node.right, count);
    }

    return count;
}

let tree1 = new Tree(6, new Tree(3), new Tree(2, new Tree(6), new Tree(4)));
let tree2 = new Tree(1, new Tree(1, new Tree(0)));
let tree3 = new Tree(1);
let tree4 = null;
let tree5 = new Tree(1, new Tree(0, new Tree(2)));

console.log(CountingMaximalValueRootsInBinaryTree.solve(tree1), 4);
console.log(CountingMaximalValueRootsInBinaryTree.solve(tree2), 3);
console.log(CountingMaximalValueRootsInBinaryTree.solve(tree3), 1);
console.log(CountingMaximalValueRootsInBinaryTree.solve(tree4), 0);
console.log(CountingMaximalValueRootsInBinaryTree.solve(tree5), 1);


