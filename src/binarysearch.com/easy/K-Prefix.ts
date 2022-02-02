// https://binarysearch.com/problems/K-Prefix
class KPrefix {
    static solve(nums, k) {
        let best = -1;
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum <= k) best = i;
        }

        return best;
    }
}

console.log(KPrefix.solve([3, -5, 4, 1, 6], 4))
