// https://binarysearch.com/problems/Large-to-Small-Sort
class LargeToSmallSort {
    static solve(nums) {
        nums = nums.sort((a, b) => b - a);

        if (nums.length < 2) return nums;

        let L = 0;
        let R = nums.length - 1;
        const result = [];
        let flag = true;

        while (L <= R) {
            result.push(flag ? nums[L++] : nums[R--]);
            flag = !flag;
        }

        return result;
    }
}

console.log(LargeToSmallSort.solve([5, 2, 9, 3]));
