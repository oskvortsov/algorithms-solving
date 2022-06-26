// https://binarysearch.com/problems/Minimize-Amplitude-After-K-Removals

class MinimizeAmplitudeAfterKRemovals {
    static solve(nums, k) {
        nums = nums.sort((a, b) => a - b);
        let L = 0;
        let R = nums.length - 1;

        while(k && nums.length) {
            if (nums[L + k] - nums[L] > nums[R] - nums[R - k]) {
                L++
            } else {
                R--;
            }
            k--;
        }

        return L < R ? nums[R] - nums[L] : 0;
    }
}

console.log(MinimizeAmplitudeAfterKRemovals.solve([1,2,98,100,106,108], 2), 10);
console.log(MinimizeAmplitudeAfterKRemovals.solve([2, 10, 14, 12, 30], 2), 4);
console.log(MinimizeAmplitudeAfterKRemovals.solve([1, 0], 1), 0);
console.log(MinimizeAmplitudeAfterKRemovals.solve([1, 1, 0], 1), 0);
