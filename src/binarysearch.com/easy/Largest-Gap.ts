// https://binarysearch.com/problems/Largest-Gap
class LargestGap {
    static solve(nums) {
        if (nums.length < 2) return 0;
        nums.sort((a, b) => a - b);
        let max = nums[1] - nums[0];

        for (let i = 1; i < nums.length; i++) {
            max = Math.max(max, nums[i] - nums[i - 1]);
        }

        return max;
    }
}

console.log(LargestGap.solve([4, 1, 2, 8, 9, 10]))
