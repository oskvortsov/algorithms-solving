// https://binarysearch.com/problems/Linked-List-Jumps

class LLNode {
  val: any;
  next: LLNode;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedListJumps1 {
  static solve(node: LLNode) {
      let head = node;
      let pointer = node;
      let index = 1;


      while (head?.next) {
          while (index <= head.val && pointer) {
              pointer = pointer.next;
              index++;
          }

          index = 1;
          head.next = pointer;
          head = head.next;
      }

      return node;

  }
}

class LinkedListJumps {
    static solve(node: LLNode) {
        let head = node;


        while (head?.next) {
            let next = head.val;

            while (--next && head.next) {
                head.next = head.next.next;
            }

            head = head.next;
        }

        return node;

    }
}

const test1 = new LLNode(2, new LLNode(1, new LLNode(4, new LLNode(1))));
const test2 = new LLNode(2, new LLNode(1));

console.log(LinkedListJumps.solve(test1));
console.log(LinkedListJumps.solve(test2));
