import { TreeNode } from './index';

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) return root2;
    if (!root2) return root1;

    root1.val += root2.val

    root1.left = mergeTrees(root1?.left, root2?.left);
    root1.right = mergeTrees(root1?.right, root2?.right);

    return root1;
}

function mergeTreesIterative(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1) return root2;

    let stack = [[root1, root2]];

    while (stack.length) {
        let [r1, r2] = stack.pop();

        if (r1 == null || r2 == null) {
            continue;
        }

        r1.val += r2.val;

        if (!r1.left) {
            r1.left = r2.left;
        } else {
            stack.push([r1.left, r2.left]);
        }

        if (!r1.right) {
            r1.right = r2.right;
        } else {
            stack.push([r1.right, r2.right])
        }
    }

    return root1;
}

describe("Merge Two Binary Trees", () => {
    it('case 1', () => {
        const first = new TreeNode(
            1,
            new TreeNode(3, new TreeNode(5)),
            new TreeNode(2),
        )

        const second = new TreeNode(
            2,
            new TreeNode(1, null, new TreeNode(4)),
            new TreeNode(3, null, new TreeNode(7))
        );

        const output = new TreeNode(
            3,
            new TreeNode(4, new TreeNode(5), new TreeNode(4)),
            new TreeNode(5, null, new TreeNode(7))
        );

        expect(mergeTreesIterative(first, second)).toStrictEqual(output);
    })
})
