import { BinarySearchTree, TreeTraverserOrder } from './BinarySearchTree';

class TestTreeNode {
  data: number;
  left: TestTreeNode;
  right: TestTreeNode;

  constructor(
    data: number,
    left: TestTreeNode = null,
    right: TestTreeNode = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  static add(node: TestTreeNode, data: number) {
    if (node == null) {
      node = new TestTreeNode(data);
    } else {
      if (data < node.data) {
        node.left = this.add(node.left, data);
      } else {
        node.right = this.add(node.right, data);
      }
    }

    return node;
  }

  static preOrder(node: TestTreeNode, list: number[]) {
    if (node == null) return;

    list.push(node.data);
    if (node.left) this.preOrder(node.left, list);
    if (node.right) this.preOrder(node.right, list);
  }

  static inOrder(node: TestTreeNode, list: number[]) {
    if (node == null) return;
    if (node.left) this.inOrder(node.left, list);
    list.push(node.data);
    if (node.right) this.inOrder(node.right, list);
  }

  static postOrder(node: TestTreeNode, list: number[]) {
    if (node == null) return;
    if (node.left) this.postOrder(node.left, list);
    if (node.right) this.postOrder(node.right, list);
    list.push(node.data);
  }

  static levelOrder(node: TestTreeNode, list: number[]) {
    const queue = [];
    if (node !== null) queue.push(node);

    while (queue.length) {
      node = queue.shift();
      list.push(node.data);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

describe('BinarySearchTree', () => {
  const MAX_VALUE = 5000;
  const COUNT_TESTS = 100;
  const ARR_SIZE = 1000;

  it('isEmpty', () => {
    const tree: BinarySearchTree<string> = new BinarySearchTree<string>();
    expect(tree.isEmpty()).toBeTruthy();

    tree.add('1984');
    expect(tree.isEmpty()).toBeFalsy();
  });

  it('size', () => {
    const tree: BinarySearchTree<string> = new BinarySearchTree<string>();
    expect(tree.size()).toBe(0);

    tree.add('1984');
    expect(tree.size()).toBe(1);
  });

  it('test height', () => {
    const tree = new BinarySearchTree<string>();

    // Tree should look like:
    //         M
    //      J    S
    //    B   N    Z
    //  A

    // No tree
    expect(tree.height()).toBe(0);

    // Layer One
    tree.add('M');
    expect(tree.height()).toBe(1);

    // Layer Two
    tree.add('J');
    expect(tree.height()).toBe(2);
    tree.add('S');
    expect(tree.height()).toBe(2);

    // Layer Three
    tree.add('B');
    expect(tree.height()).toBe(3);
    tree.add('N');
    expect(tree.height()).toBe(3);
    tree.add('Z');
    expect(tree.height()).toBe(3);

    // Layer 4
    tree.add('A');
    expect(tree.height()).toBe(4);
  });

  it('add', () => {
    // Add element which does not yet exist
    const tree = new BinarySearchTree<string>();
    expect(tree.add('A')).toBeTruthy();

    // Add duplicate element
    expect(tree.add('A')).toBeFalsy();

    // Add a second element which is not a duplicate
    expect(tree.add('B')).toBeTruthy();
  });

  it('remove', () => {
    // Try removing an element which doesn't exist
    const tree = new BinarySearchTree<string>();
    tree.add('A');
    expect(tree.size()).toBe(1);
    expect(tree.remove('B')).toBeFalsy();
    expect(tree.size()).toBe(1);

    // Try removing an element which does exist
    tree.add('B');
    expect(tree.size()).toBe(2);
    expect(tree.remove('B')).toBeTruthy();
    expect(tree.size()).toBe(1);
    expect(tree.height()).toBe(1);

    // Try removing the root
    expect(tree.remove('A')).toBeTruthy();
    expect(tree.size()).toBe(0);
    expect(tree.height()).toBe(0);
  });

  it('remove: random uniq array', () => {
    const tree = new BinarySearchTree<number>();
    const testArr = getRandomUniqArray(ARR_SIZE);

    for (let num of testArr) tree.add(num);
    expect(tree.size()).toBe(testArr.length);

    for (let num of testArr) tree.remove(num);
    expect(tree.size()).toBe(0);
  });

  it('contains', () => {
    // Setup tree
    const tree = new BinarySearchTree<string>();

    expect(tree.contains(null)).toBeFalsy();

    tree.add('B');
    tree.add('A');
    tree.add('C');

    // Try looking for an element which doesn't exist
    expect(tree.contains('D')).toBeFalsy();

    // Try looking for an element which exists in the root
    expect(tree.contains('B')).toBeTruthy();

    // Try looking for an element which exists as the left child of the root
    expect(tree.contains('A')).toBeTruthy();

    // Try looking for an element which exists as the right child of the root
    expect(tree.contains('C')).toBeTruthy();
  });

  it('traverse: preorder', () => {
    for (let i = 0; i < COUNT_TESTS; i++) {
      const randomList = getRandomUniqArray(10);
      expect(
        validateTreeTraversal(TreeTraverserOrder.PRE_ORDER, randomList),
      ).toBeTruthy();
    }
  });

  it('traverse: inorder', () => {
    for (let i = 0; i < COUNT_TESTS; i++) {
      const randomList = getRandomUniqArray(ARR_SIZE);
      expect(
        validateTreeTraversal(TreeTraverserOrder.IN_ORDER, randomList),
      ).toBeTruthy();
    }
  });

  it('traverse: postorder', () => {
    for (let i = 0; i < COUNT_TESTS; i++) {
      const randomList = getRandomUniqArray(ARR_SIZE);
      expect(
        validateTreeTraversal(TreeTraverserOrder.POST_ORDER, randomList),
      ).toBeTruthy();
    }
  });

  it('traverse: level order', () => {
    for (let i = 0; i < COUNT_TESTS; i++) {
      const randomList = getRandomUniqArray(ARR_SIZE);
      expect(
        validateTreeTraversal(TreeTraverserOrder.LEVEL_ORDER, randomList),
      ).toBeTruthy();
    }
  });

  it('traverse: unknown order', () => {
    const tree = new BinarySearchTree();
    expect(tree.traverse('not found' as any)).toBeNull();
  });

  function validateTreeTraversal(order: TreeTraverserOrder, input: number[]) {
    const out: number[] = [];
    const expected: number[] = [];

    let testTree: TestTreeNode = null;
    const tree = new BinarySearchTree<number>();

    for (let num of input) {
      testTree = TestTreeNode.add(testTree, num);
      tree.add(num);
    }

    switch (order) {
      case TreeTraverserOrder.PRE_ORDER:
        TestTreeNode.preOrder(testTree, expected);
        break;
      case TreeTraverserOrder.IN_ORDER:
        TestTreeNode.inOrder(testTree, expected);
        break;
      case TreeTraverserOrder.POST_ORDER:
        TestTreeNode.postOrder(testTree, expected);
        break;
      case TreeTraverserOrder.LEVEL_ORDER:
        TestTreeNode.levelOrder(testTree, expected);
    }

    const iterator = tree.traverse(order);
    for (let num of iterator) {
      out.push(num);
    }

    if (out.length !== expected.length) return false;

    for (let i = 0; i < expected.length; i++) {
      if (out[i] !== expected[i]) return false;
    }

    return true;
  }

  function getRandomUniqArray(size: number): number[] {
    const set = new Set();
    const arr = [];

    while (arr.length !== size) {
      const ranNum = ~~(Math.random() * MAX_VALUE);

      if (set.has(ranNum)) continue;
      set.add(ranNum);
      arr.push(ranNum);
    }

    return arr;
  }
});
