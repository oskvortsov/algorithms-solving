// https://leetcode.com/problems/squares-of-a-sorted-array/

function sortedSquares(nums: number[]): number[] {
    nums = nums.map(n => Math.pow(n, 2));
    let minNumber = 0;


    for(let i = 0; i < nums.length; i++) {
        if (nums[minNumber] > nums[i]) {
            minNumber = i;
        }
    }

    let L = minNumber - 1;
    let R = minNumber + 1;

    let result = new Array(nums.length).fill(0);
    let index = 0;
    result[index++] = nums[minNumber];

    while (L > -1 && R < nums.length) {
        result[index++] = nums[L] < nums[R] ? nums[L--] : nums[R++];
    }

    while (L > -1) result[index++] = nums[L--];
    while (R < nums.length) result[index++] = nums[R++];

    return result;
}

describe("Squares of a Sorted Array", () => {
    it("case 1", () => {
        expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
    })

    it("case 2", () => {
        expect(sortedSquares([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
    })
})
