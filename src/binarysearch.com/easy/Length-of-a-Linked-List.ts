// https://binarysearch.com/problems/Length-of-a-Linked-List

//ts-ignore
class LLNode {
  val: any;
  next: LLNode;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LengthOfALinkedList {
  static solve(node: LLNode) {
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }
}
