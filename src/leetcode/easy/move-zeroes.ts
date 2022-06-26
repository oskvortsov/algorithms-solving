/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let skipIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[skipIndex] = nums[i];
            skipIndex++;
        }
    }

    for (let i = skipIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);
