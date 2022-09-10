// https://leetcode.com/problems/rotate-array/

function rotate(nums: number[], k: number): void {
    const len = nums.length;
    k %= len;

    nums.reverse();

    for (let i = 0; i < ~~(k / 2); i++) {
        let temp = nums[k - i - 1];
        nums[k - i - 1] = nums[i];
        nums[i] = temp
    }

    for (let i = 0; i < ~~((len - k) / 2); i++) {
        let temp = nums[k + i];
        nums[k + i] = nums[len - i - 1];
        nums[len - i - 1] = temp;
    }
}

describe("Rotate Array", () => {
    it('case 1', () => {
        const nums = [1,2,3,4,5,6,7];
        rotate(nums, 3)
        expect(nums).toStrictEqual([5,6,7,1,2,3,4]);
    })

    it('case 2', () => {
        const nums = [-1,-100,3,99];
        rotate(nums, 2)
        expect(nums).toStrictEqual([3,99,-1,-100]);
    })

    it('case 3', () => {
        const nums = [1, 2, 3, 4];
        rotate(nums, 3)
        expect(nums).toStrictEqual([2, 3, 4, 1]);
    })

})
