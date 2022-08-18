//https://leetcode.com/problems/find-the-duplicate-number/
import { LLNode, createListBuArray } from './index';

// by set time - O(n), space - O(n)
// @ts-ignore
function findDuplicate1(nums: number[]): number {
    let set = new Set();

    for (let n of nums) {
        if (set.has(n)) return n;
        set.add(n);
    }

    return -1;
}

// flip to negative number time - O(n), space - O(n)
// @ts-ignore
function findDuplicate2(nums: number[]): number {
    let duplicate = -1;

    for (let i = 0; i < nums.length; i++) {
        let cur = Math.abs(nums[i]);

        if (nums[cur] < 0) {
            duplicate = cur;
            break;
        }

        nums[cur] *= -1;
    }

    for (let i = 0; i < nums.length; i++) nums[i] = Math.abs(nums[i]);

    return duplicate;
}

// using arr like a store time - O(n), space - O(n)
function store(nums: number[], cur: number): number {
    if (nums[cur] == cur) {
        return cur;
    }

    let nxt = nums[cur];
    nums[cur] = cur;
    return store(nums, nxt);
}
// @ts-ignore
function findDuplicate31(nums: number[]): number {
    return store(nums, 0);
}

// using nums[0] like a buffer for duplicate element and then just swap element by index
// time O(n), space 0(1)
// @ts-ignore
function findDuplicate32(nums: number[]): number {
    while (nums[0] !== nums[nums[0]]) {
        let next = nums[nums[0]];
        nums[nums[0]] = nums[0];
        nums[0] = next;
    }

    return nums[0];
}

// using technic to find cycle in linked list
function findDuplicate(nums: number[]): number {
    let tortoise = nums[0];
    let hare =  nums[0];

    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);

    tortoise = nums[0];

    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return hare;
}


describe('findDuplicate', () => {
    it('case 1', () => expect(findDuplicate([1,3,4,2,2])).toBe(2))

    it('case 2', () => expect(findDuplicate([3,1,3,4,2])).toBe(3))
})
