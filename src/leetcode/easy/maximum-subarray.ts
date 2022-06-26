function maxSubArray(nums: number[]): number {
    let sum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) sum = 0;
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2,1]))
console.log(maxSubArray([-1]))
