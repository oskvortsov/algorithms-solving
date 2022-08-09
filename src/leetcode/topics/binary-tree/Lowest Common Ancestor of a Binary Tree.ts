// https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/932/
import { TreeNode } from './index';

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    let answer = null;

    const recurseSearch = (node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): boolean => {
        if (!node) return false;

        let left = recurseSearch(node.left, p, q) ? 1 : 0;
        let right = recurseSearch(node.right, p, q) ? 1 : 0;
        let mid = node == p || node == q ? 1 : 0;

        if (left + right + mid >= 2) {
            answer = node;
        }

        return (mid + left + right) > 0;
    }

    recurseSearch(root, p, q);

    return answer;
}


function lowestCommonAncestorOld(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
    const pPath: TreeNode[] = [];
    findPath(root, p, pPath);

    const qPath: TreeNode[] = [];
    findPath(root, q, qPath);

    let answer = null;

    while (pPath.length && qPath.length) {
        const p1 = pPath.pop();
        const q2 = qPath.pop();

        if (p1 !== q2) return answer;

        answer = p1;
    }


    return answer;
}

function findPath(root: TreeNode, node: TreeNode, path: TreeNode[]): boolean {
    if (!root) return false;

    if (root == node || findPath(root.left, node, path) || findPath(root.right, node, path)) {
        path.push(root);
        return true;
    }

    return false;
}

const p1 = new TreeNode(5);
const q1 = new TreeNode(1);
const treeTest = new TreeNode(3, p1, q1);
console.log(lowestCommonAncestor(treeTest, p1, q1)?.val, 3);
