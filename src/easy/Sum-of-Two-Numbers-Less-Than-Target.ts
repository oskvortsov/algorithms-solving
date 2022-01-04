// https://binarysearch.com/problems/Sum-of-Two-Numbers-Less-Than-Target
class SumOfTwoNumbersLessThanTarget {
    static solve(nums, target) {
        nums = nums.sort((a, b) => a - b);

        let left = 0;
        let right = nums.length - 1;
        let sum = nums[left] + nums[1];

        while (left < right) {
            let curSum = nums[left] + nums[right];
            if (curSum >= target) {
                right--;
            } else {
                sum = Math.max(curSum, sum);
                left++;
            }
        }


        return sum;
    }
}

console.log(SumOfTwoNumbersLessThanTarget.solve([5, 1, 2, 3], 4));
console.log(SumOfTwoNumbersLessThanTarget.solve([-2, -3, -1], -4));
console.log(SumOfTwoNumbersLessThanTarget.solve([1, 2, 3, 3], 6));
console.log(SumOfTwoNumbersLessThanTarget.solve([1, 2, 4, 1], 5));
