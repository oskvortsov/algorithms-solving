//https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
    return nums.reduce((acc, value) => acc ^ value);
}

describe('Single Number', () => {
    it('case 1', () => expect(singleNumber([2,2,1])).toBe(1));
    it('case 2', () => expect(singleNumber([4,1,2,1,2])).toBe(4));
    it('case 3', () => expect(singleNumber([1])).toBe(1));
})
