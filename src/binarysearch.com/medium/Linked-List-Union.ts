// https://binarysearch.com/problems/Linked-List-Union
// @ts-ignore
class LLNode {
    val: number;
    next: LLNode | null;

    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

class LinkedListUnion {
    static solve(ll0, ll1) {
        let temp = new LLNode(0);
        let pointer = temp;


        while (ll0 && ll1) {
            let next = ll0.val < ll1.val ? ll0 : ll1

            if (ll0.val == ll1.val) {
                ll0 = ll0.next;
                ll1 = ll1.next;
            } else if (ll0.val < ll1.val) {
                ll0 = ll0.next;
            } else {
                ll1 = ll1.next;
            }

            pointer.next = next;
            pointer = pointer.next;
        }

        pointer.next = ll0 || ll1;

        return temp.next;
    }
}

class LinkedListUnion1 {
    static solve(ll0, ll1) {
        let temp = null;
        let pointer = temp;


        while (ll0 || ll1) {
            let next = null;

            if (!ll0 || !ll1) {
                next = ll0 || ll1;
                ll0 ? ll0 = ll0.next : ll1 = ll1.next;
            } else if (ll0?.val == ll1?.val) {
                next = ll1 || ll0;
                ll0 = ll0?.next;
                ll1 = ll1?.next;
            } else if (ll0?.val < ll1?.val) {
                next = ll0;
                ll0 = ll0.next;
            } else {
                next = ll1
                ll1 = ll1.next;
            }

            if (temp) {
                pointer.next = next;
                pointer = next;
            } else {
                temp = next;
                pointer = next;
            }

        }

        return temp;
    }
}

console.log(LinkedListUnion.solve(
    new LLNode(1, new LLNode(3, new LLNode(4))),
    new LLNode(2, new LLNode(3, new LLNode(4)))
))

console.log(LinkedListUnion.solve(
    new LLNode(0),
    new LLNode(0)
))
