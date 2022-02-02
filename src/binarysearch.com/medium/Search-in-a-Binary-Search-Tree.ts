// https://binarysearch.com/problems/Search-in-a-Binary-Search-Tree


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
    static solve(root, val) {
        return search(root, val);
    }
}

function search(root, val) {
    if (!root) return false;

    if (root.val == val) return true;

    if (root.left && root.left?.val < val) {
        return search(root.right, val)
    }

    return search(root.left, val);
}


