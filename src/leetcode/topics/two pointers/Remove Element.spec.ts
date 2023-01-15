// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    let trueIndex = 0;
    let index = 0;

    while (index < nums.length) {
        if (nums[index] !== val) {
            nums[trueIndex++] = nums[index]
        }
        index++;
    }

    for (let i = trueIndex; i < nums.length; i++) nums[i] = null;

    return trueIndex;
}

describe('Remove Element', () => {
    it('case 1', () => {
        let nums = [3,2,2,3];
        expect(removeElement(nums, 3)).toBe(2);
        expect(nums).toStrictEqual([2,2,null,null]);
    })

    it('case 2', () => {
        let nums = [0,1,2,2,3,0,4,2];
        expect(removeElement(nums, 2)).toBe(5);
        expect(nums).toStrictEqual([0,1,3,0,4,null,null,null]);
    })
})
