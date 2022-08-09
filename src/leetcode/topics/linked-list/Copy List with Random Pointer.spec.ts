import { LLNode } from './index';

class LLNodeWithRandom extends LLNode {
    random: LLNodeWithRandom | null;
    next: LLNodeWithRandom | null;

    constructor(val: number, next: LLNodeWithRandom | null = null, random: LLNodeWithRandom | null = null) {
        super(val, next);
        this.random = random;
    }
}

function copyRandomListBad(head: LLNodeWithRandom | null): LLNodeWithRandom | null {
    let heap = new WeakMap<LLNodeWithRandom, number>();
    let stack = [];
    let tmp = head;
    let copyHead = null
    let tmpCopy = null;
    let index = 0;

    while (tmp) {
        const node = new LLNodeWithRandom(tmp.val);
        heap.set(tmp, index++);
        stack.push(node);

        if (!copyHead) {
            copyHead = node;
            tmpCopy = node;
        } else {
            tmpCopy.next = node;
            tmpCopy = tmpCopy.next;
        }

        tmp = tmp.next;
    }

    tmp = head;
    tmpCopy = copyHead;

    while (tmp) {
        if (tmp.random) {
            tmpCopy.random = stack[heap.get(tmp.random)];
        }

        tmp = tmp.next;
        tmpCopy = tmpCopy.next;
    }

    return copyHead;
}


function copyRandomList(head: LLNodeWithRandom | null): LLNodeWithRandom | null {
    const map: WeakMap<LLNodeWithRandom, LLNodeWithRandom> = new WeakMap<LLNodeWithRandom, LLNodeWithRandom>();
    let tmp = head;

    while (tmp) {
        map.set(tmp, new LLNodeWithRandom(tmp.val));
        tmp = tmp.next;
    }

    tmp = head;
    while (tmp) {
        let node = map.get(tmp);
        let next = map.get(tmp.next);
        let random = map.get(tmp.random);

        if (next) node.next = next;
        if (random) node.random = random;

        tmp = tmp.next;
    }

    return map.get(head);
}

// test stuff
function createListWithRandomByArray(list: Array<[number, number]>) {
    const stack = [];
    let head = null;
    let tmp = null;

    list.forEach(([val]) => {
        let node = new LLNodeWithRandom(val);
        if (!head) {
            head = node;
            tmp = node;
        } else {
            tmp.next = node;
            tmp = tmp.next;
        }
        stack.push(node);
    })

    tmp = head;

    let index = 0;
    while (tmp) {
        const [, random] = list[index++];
        if (random !== null) tmp.random = stack[random];

        tmp = tmp.next;
    }

    return head;
}

export function compareTwoListWithRandom(first: LLNodeWithRandom, second: LLNodeWithRandom): boolean {
    let tmp1 = first;
    let tmp2 = second;

    while (tmp1) {
        if (tmp1.val !== tmp2?.val) return false;
        if (tmp1.random?.val !== tmp2?.random?.val) return false;

        tmp1 = tmp1.next;
        tmp2 = tmp2?.next || null;
    }

    return tmp1 == tmp2;
}

describe("Copy List with Random Pointer", () => {
    it('case 1', () => {
        const input = createListWithRandomByArray([[7,null],[13,0],[11,4],[10,2],[1,0]]);
        const output = copyRandomList(input);
        const output2 = copyRandomListBad(input);

        expect(input).not.toBe(output);
        expect(compareTwoListWithRandom(input, output)).toBeTruthy();

        expect(input).not.toBe(output2);
        expect(compareTwoListWithRandom(input, output2)).toBeTruthy();
    })

    it('case 2', () => {
        const input = createListWithRandomByArray([[1,1],[2,1]]);
        const output = copyRandomList(input);
        const output2 = copyRandomListBad(input);

        expect(input).not.toBe(output);
        expect(compareTwoListWithRandom(input, output)).toBeTruthy();

        expect(input).not.toBe(output2);
        expect(compareTwoListWithRandom(input, output2)).toBeTruthy();
    })

    it('case 3', () => {
        const input = createListWithRandomByArray([[3,null],[3,0],[3,null]]);
        const output = copyRandomList(input);
        const output2 = copyRandomListBad(input);

        expect(input).not.toBe(output);
        expect(compareTwoListWithRandom(input, output)).toBeTruthy();

        expect(input).not.toBe(output2);
        expect(compareTwoListWithRandom(input, output2)).toBeTruthy();
    })
})
