// https://leetcode.com/problems/move-zeroes/submissions/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let skipIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) nums[skipIndex++] = nums[i]
    }

    for (let i = skipIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

describe("Move Zeroes", () => {
    it('case 1', () => {
        const nums = [0,1,0,3,12];
        moveZeroes(nums);
        expect(nums).toStrictEqual([1,3,12,0,0])
    })
})
