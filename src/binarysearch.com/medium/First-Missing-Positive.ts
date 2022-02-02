// https://binarysearch.com/problems/First-Missing-Positive
class FirstMissingPositive {
    static solve(nums) {
        nums = nums.filter(i => i >= 0);

        if (!nums.length) return 1;

        nums = nums.sort((a, b) => a - b);
        let j = 1;

        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] > j) {
                return j;
            } else if (nums[i] == j) {
                j++;
            }
        }

        return nums[nums.length - 1] + 1;
    }
}

class FirstMissingPositive1 {
    static solve(nums) {
        let max = -Infinity;
        let allNums = new Set();

        for (let i of nums) {
            if (i >= 0) {
                allNums.add(i);
                max = Math.max(max, i);
            }
        }

        if (!allNums.size) return 1;

        for (let i = 1; i <= max; i++) {
            if (!allNums.has(i)) return i;
        }


        return max + 1;
    }
}


console.log(FirstMissingPositive.solve([1, 2, 3]));
