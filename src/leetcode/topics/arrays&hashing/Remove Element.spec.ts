// https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3247/

function removeElement(nums: number[], val: number): number {
    let index = 0;
    let next = 0;

    while (index < nums.length) {
        if(nums[index] !== val) {
            nums[next++] = nums[index];
        }

        index++;
    }

    return next;
}

describe('Remove Element', () => {
    it('case 1', () => {
        expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5);
    })
})
