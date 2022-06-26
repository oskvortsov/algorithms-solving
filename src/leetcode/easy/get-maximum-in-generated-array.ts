//https://leetcode.com/problems/get-maximum-in-generated-array/

function getMaximumGenerated(n: number): number {
    if (n < 1) return 0;
    let max = 1;
    let nums = [0, 1];

    for (let i = 1; i < n / 2; i++) {
        const index = 2 * i;
        nums[index] = nums[i];

        if (index + 1 < n) {
            nums[index + 1] = nums[i] + nums[i + 1];
            max = Math.max(nums[index + 1], max);
        }
    }

    return max;
}

console.log(getMaximumGenerated(7), 3);
