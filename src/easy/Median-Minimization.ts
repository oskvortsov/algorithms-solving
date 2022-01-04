class MedianMinimization {
    static solve(nums) {
        nums = nums.sort((a, b) => b - a);
        let median = Math.floor(nums.length / 2);
        return Math.abs(nums[median] - nums[median - 1]);
    }
}

console.log(MedianMinimization.solve([1, 9, 7, 4, 3, 6]));
console.log(MedianMinimization.solve([0, 0]));
console.log(MedianMinimization.solve([3, 0, 0, 0, 0, 0]));
