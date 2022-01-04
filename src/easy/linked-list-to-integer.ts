//https://binarysearch.com/problems/Linked-List-to-Integer
class LLNode {
  val: number;
  next: LLNode | null;

  constructor(val: number, next: LLNode | null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedListToInteger {
  static solve(node: LLNode): number {
    let num = 0;

    while (node) {
      num = (num << 1) + node.val;
      node = node.next;
    }

    return num;
  }
}
