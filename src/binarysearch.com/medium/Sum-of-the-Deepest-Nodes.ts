// https://binarysearch.com/problems/Sum-of-the-Deepest-Nodes

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

class SumOfTheDeepestNodes {
  static solve(root: Tree) {
    if (!root) return 0;

    const map = {};
    const deepestNode = sumNodes(root, 0, map);

    return map[deepestNode];
  }
}

function sumNodes(root, deep = 0, map, max = 0) {
  if (!root) return deep - 1;

  deep in map ? map[deep] += root.val : map[deep] = root.val;

  return Math.max(
      deep,
      sumNodes(root.left, deep + 1, map),
      sumNodes(root.right, deep + 1, map)
  )
}

console.log(
  SumOfTheDeepestNodes.solve(
    new Tree(
      0,
      new Tree(5),
      new Tree(9, new Tree(1, new Tree(4), new Tree(2)), new Tree(3)),
    ),
  ),
);
console.log(SumOfTheDeepestNodes.solve(new Tree(-65)));
