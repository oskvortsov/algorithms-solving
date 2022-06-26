// https://binarysearch.com/problems/Flip-to-Zeros
class FlipToZeros {
    static solve(nums) {
        let count = 0;
        let prev = null;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == prev || prev == null && !nums[i]) continue;
            prev = nums[i];
            count++;
        }

        return count;
    }
}

console.log(FlipToZeros.solve([1, 1, 0]), 2);
console.log(FlipToZeros.solve([1, 0, 1, 0, 1]), 5);
