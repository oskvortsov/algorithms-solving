// https://binarysearch.com/problems/Vertical-Lines-in-Binary-Tree

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

class VerticalLinesInBinaryTree {
  static solve(root: Tree) {
    return countLines(root, null, 0);
  }
}

function countLines(node, direction, count) {
  if (!node) return count;

  if (!direction) {
    count++;
    count = countLines(node['left'], 'left', count);
    count = countLines(node['right'], 'right', count);
  } else {
    if (!node.left && !node.right) {
      count++;
      return count;
    }

    let direction =
      (node.left && !node.right && 'left') ||
      (node.right && !node.left && 'right');
    if (direction) {
      count++;
      count = countLines(node[direction], direction, count);
    }
  }

  return count;
}

let tree1 = new Tree(
  1,
  new Tree(2, new Tree(3)),
  new Tree(4, null, new Tree(5)),
);
let tree2 = new Tree(1, new Tree(2, new Tree(3, new Tree(4))));
let tree3 = new Tree(0, null, new Tree(2, new Tree(1)));

// console.log(VerticalLinesInBinaryTree.solve(tree1));
// console.log(VerticalLinesInBinaryTree.solve(tree2));
console.log(VerticalLinesInBinaryTree.solve(tree3));
