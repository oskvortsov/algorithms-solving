/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const len = nums.length;

    if (k > len) {
        k = k % len;
    }

    nums.reverse();

    for (let i = 0; i < Math.trunc(k / 2); i++) {
        let temp = nums[i];
        nums[i] = nums[k - i - 1];
        nums[k - i - 1] = temp;
    }

    for (let i = 0; i < Math.trunc((len - k) / 2); i++) {
        let temp = nums[i + k];
        nums[i + k] = nums[len - i - 1];
        nums[len - i - 1] = temp;
    }
}

// let nums1 = [1,2,3,4,5,6,7];
// console.log(rotate(nums1, 3), nums1);
//
// let nums2 = [-1];
// console.log(rotate(nums2, 2), nums2);
//
// let nums3 = [1, 2, 3];
// console.log(rotate(nums3, 4), nums3);
