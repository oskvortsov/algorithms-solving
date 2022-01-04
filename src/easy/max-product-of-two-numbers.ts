// https://binarysearch.com/problems/Max-Product-of-Two-Numbers
class MaxProductOfTwoNumbers {
    solve(nums: Array<number>): number {
        let min1 = Infinity, min2 = Infinity;
        let max1 = -Infinity, max2 = -Infinity;

        for (let val of nums) {
            if (min1 > val) {
                min2 = min1;
                min1 = val;
            } else if (min2 > val) {
                min2 = val;
            }

            if (max1 < val) {
                max2 = max1;
                max1 = val;
            } else if (max2 < val) {
                max2 = val;
            }
        }

        return Math.max(min1 * min2, max1 * max2);
    }
}
