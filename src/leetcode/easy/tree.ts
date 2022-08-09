class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(
  root: TreeNode | null,
  min = -Infinity,
  max = Infinity,
): boolean {
  if (!root) return true;

  if (min >= root.val || max <= root.val) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}
// let treeForValidation = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)));
// console.log(isValidBST(treeForValidation));

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

// let symmetricTree = new TreeNode(1,
//     new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//     new TreeNode(2, new TreeNode(4), new TreeNode(3)),
// )
//
// let symmetricTree1 = new TreeNode(1,
//     new TreeNode(2, null, new TreeNode(3)),
//     new TreeNode(2, null, new TreeNode(3)),
// )
//
// console.log(isSymmetric(symmetricTree));
// console.log(isSymmetric(symmetricTree1));

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const levels = [];
  const queue = [root];

  while (queue.length) {
    const queueSize = queue.length;
    const level = [];

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift();

      level.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    levels.push(level);
  }

  return levels;
}

const levelsTree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

// console.log(levelOrder(levelsTree));

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  return insertTree(null, 0, nums.length, nums);
}


function insertTree(node: TreeNode, L: number, R: number, nums: number[]) {
  if (L > R) return node;

  let mid = L + ~~((R - L) / 2);

  if (nums[mid] !== undefined) {
    node = insertNode(node, nums[mid]);

    insertTree(node, L, mid - 1, nums);
    insertTree(node, mid + 1, R, nums);
  }

  return node;
}

function insertNode(node: TreeNode, elem: number) {
  if (node == null) {
    node = new TreeNode(elem);
  } else {
    if (elem < node.val) {
      node.left = insertNode(node.left, elem);
    } else {
      node.right = insertNode(node.right, elem);
    }
  }

  return node;
}

function balanceInsert(L: number, R: number, nums: number[]) {
  if (L <= R) {
    let mid = L + ~~((R - L) / 2);
    let node = new TreeNode(nums[mid]);

    node.left = balanceInsert(L, mid - 1, nums);
    node.right = balanceInsert(mid + 1, R, nums);

    return node;
  }

  return null;
}


const testArrOrder = [0,1,2,3,4,5];
console.log(sortedArrayToBST(testArrOrder), [3,1,5,0,2,4]);

// const outLimit = [-10,-3,0,5,9];
// console.log(sortedArrayToBST(outLimit), outLimit);
// // @ts-ignore
// const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(JSON.stringify(sortedArrayToBST(testArr)));
//
// const testArr2 = [1, 3];
// console.log(JSON.stringify(sortedArrayToBST(testArr2)));
