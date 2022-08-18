export class LLNode<T = number> {
    val: T;
    next: LLNode | null;

    constructor(val: T, next: LLNode = null) {
        this.val = val;
        this.next = next;
    }
}

export function createListBuArray<T>(array: T[]) {
    let head = null;
    let temp = head

    array.forEach(item => {
        const node = new LLNode(item);

        if (!head) {
            head = node;
            temp = node;
        } else {
            temp.next = node;
            temp = node;
        }
    })

    return head;
}

export function makeCycle(head: LLNode, pos: number) {
    if (pos < 0) return;

    let node = head;
    while (pos-- > 1) node = node.next;

    let tail = node;
    while (tail && tail.next) tail = tail.next;

    tail.next = node;
}

export function findKNode(head: LLNode, pos: number) {
    let cur = head;

    while (pos--) cur = cur.next;

    return cur;
}

export function compareTwoList(first: LLNode, second: LLNode): boolean {
    let tmp1 = first;
    let tmp2 = second;

    while (tmp1) {
        if (tmp1.val !== tmp2?.val) return false;
        tmp1 = tmp1.next;
        tmp2 = tmp2?.next || null;
    }

    return tmp1 == tmp2;
}
