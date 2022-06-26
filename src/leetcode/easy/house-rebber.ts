//https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/

function rob(nums: number[]): number {
    const n = nums.length;

    if (n < 3) return Math.max(...nums);

    const dp = [nums[0], nums[1]];

    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(
            nums[i] + dp[i - 2],
            nums[i] + (dp[i - 3] | 0)
        )
    }

    return Math.max(dp[n - 1], dp[n - 2]);
}


console.log(rob([1,2,3,1]), 4);
console.log(rob([2,7,9,3,1]), 12);
