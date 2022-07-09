class BSTreeNode<T> {
  data: T;
  left: BSTreeNode<T> | null;
  right: BSTreeNode<T> | null;

  constructor(
    data: T,
    left: BSTreeNode<T> = null,
    right: BSTreeNode<T> = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export enum TreeTraverserOrder {
  PRE_ORDER,
  IN_ORDER,
  POST_ORDER,
  LEVEL_ORDER,
}

export class BinarySearchTree<T> {
  private root: BSTreeNode<T>;
  private nodeCount: number;

  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }

  isEmpty() {
    return this.size() == 0;
  }

  size() {
    return this.nodeCount;
  }

  height() {
    return this.heightByNode(this.root);
  }

  add(elem: T): boolean {
    if (elem == null || this.contains(elem)) return false;

    this.root = this.addNode(this.root, elem);
    this.nodeCount++;
    return true;
  }

  contains(elem: T): boolean {
    if (elem == null) return false;

    let node = this.root;

    while (node && node.data !== elem) {
      node = elem < node.data ? node.left : node.right;
    }

    return node !== null;
  }

  remove(elem: T): boolean {
    if (this.contains(elem)) {
      this.root = this.removeNode(this.root, elem);
      this.nodeCount--;
      return true;
    }

    return false;
  }

  traverse(order: TreeTraverserOrder): Iterable<T> {
    switch (order) {
      case TreeTraverserOrder.IN_ORDER:
        return this.inOrderTraverse();
      case TreeTraverserOrder.PRE_ORDER:
        return this.preOrderTraverse();
      case TreeTraverserOrder.POST_ORDER:
        return this.postOrderTraverse();
      case TreeTraverserOrder.LEVEL_ORDER:
        return this.levelOrderTraverse();
      default:
        return null;
    }
  }

  private removeNode(node: BSTreeNode<T>, elem: T) {
    // move to left node if elem less than node.data
    if (elem < node.data) {
      node.left = this.removeNode(node.left, elem);

      // move to right if elem bigger than node.data
    } else if (elem > node.data) {
      node.right = this.removeNode(node.right, elem);

      // in others case node.data equal elem
    } else {
      // if node doesn't have or only one child just return this child node.
      if (node.left == null) {
        return node.right;
      }

      if (node.right == null) {
        return node.left;
      }

      // in another case should swap the smallest value form right subtree or the biggest value from left subtree
      const tmp = this.findMin(node.right);
      // const tmp = this.findMax(node.left);

      node.data = tmp.data;
      node.right = this.removeNode(node.right, tmp.data);
    }

    return node;
  }

  private addNode(node: BSTreeNode<T>, elem: T) {
    if (node == null) {
      node = new BSTreeNode<T>(elem);
    } else {
      if (elem < node.data) {
        node.left = this.addNode(node.left, elem);
      } else {
        node.right = this.addNode(node.right, elem);
      }
    }

    return node;
  }

  private findMin(node: BSTreeNode<T>) {
    while (node.left !== null) node = node.left;
    return node;
  }

  // private findMax(node: BSTreeNode<T>) {
  //   while (node.right !== null) node = node.right;
  //   return node;
  // }

  private heightByNode(node: BSTreeNode<T>): number {
    if (node == null) return 0;
    return (
      Math.max(this.heightByNode(node.left), this.heightByNode(node.right)) + 1
    );
  }

  private inOrderTraverse(): Iterable<T> {
    const stack = [this.root];
    let trav = this.root;

    return {
      [Symbol.iterator](): Iterator<T> {
        return {
          next: () => {
            while (trav && trav.left) {
              stack.push(trav.left);
              trav = trav.left;
            }

            let node = stack.pop();

            if (!node) return { value: null, done: true };

            if (node.right) {
              stack.push(node.right);
              trav = node.right;
            }

            return {
              value: node.data,
              done: false,
            };
          },
        };
      },
    };
  }

  private preOrderTraverse(): Iterable<T> {
    const stack = [this.root];

    return {
      [Symbol.iterator](): Iterator<T> {
        return {
          next: () => {
            const node = stack.pop();

            if (!node) {
              return { value: null, done: true };
            }

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);

            return {
              value: node.data,
              done: false,
            };
          },
        };
      },
    };
  }

  private postOrderTraverse(): Iterable<T> {
    const buffer = [this.root];
    const stack = [];

    return {
      [Symbol.iterator](): Iterator<T> {
        return {
          next: () => {
            while (buffer.length !== 0) {
              const node = buffer.pop();

              if (node.left) buffer.push(node.left);
              if (node.right) buffer.push(node.right);

              stack.push(node);
            }

            if (!stack.length) return { value: null, done: true }

            return {
              value: stack.pop().data,
              done: false,
            };
          },
        };
      },
    };
  }

  private levelOrderTraverse(): Iterable<T> {
    const stack = [this.root];

    return {
      [Symbol.iterator](): Iterator<T> {
        return {
          next: () => {
            const node = stack.shift();

            if (!node) return { value: null, done: true };

            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);

            return {
              value: node.data,
              done: false,
            };
          },
        };
      },
    };
  }
}
