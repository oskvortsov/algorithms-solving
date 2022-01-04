// https://binarysearch.com/problems/Insert-Into-Linked-List

 // @ts-ignore
class LLNode {
    val: number;
    next: LLNode | null;

    constructor(val, next=null) {
      this.val = val
      this.next = next
    }
  }


class InsertIntoLinkedList {
    static solve(head: LLNode, pos, val) {
        let tempNode = new LLNode(val, null);

        if (pos == 0) {
            tempNode.next = head;
            head = tempNode;

            return head;
        }

        let point = head;
        while (pos !== 1) {
            if (point.next) point = point.next;
            pos--;
        }

        tempNode.next = point.next;
        point.next = tempNode;

        return head;
    }
}

// console.log(InsertIntoLinkedList.solve([1,3, 5, 7], 2, 9))
console.log(InsertIntoLinkedList.solve(new LLNode(0, new LLNode(2, null)), 1, 0))
console.log(InsertIntoLinkedList.solve(new LLNode(1, new LLNode(2, null)), 0, 0))
