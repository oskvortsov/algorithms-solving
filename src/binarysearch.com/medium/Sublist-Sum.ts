// https://binarysearch.com/problems/Sublist-Sum
// https://en.wikipedia.org/wiki/Maximum_subarray_problem
class SublistSum {
    static solve(nums) {
        if (!nums.length) return false;

        let sum = 0;
        let bestSum = 0;
        let curSum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            curSum = Math.max(0, curSum + nums[i]);
            bestSum = Math.max(bestSum, curSum);

            if (bestSum > sum) return true;
        }

        return bestSum > sum;
    }
}

console.log(SublistSum.solve([2, -1, 2]));
console.log(SublistSum.solve([1, -1]));
console.log(SublistSum.solve([1, -2, 3, 4]));
console.log(SublistSum.solve([1, -2, 3, 4, -2, -5, 5, 13]));
