// https://binarysearch.com/problems/List-Min-Replacement

class ListMinReplacement {
    static solve(nums) {
        let min = nums[1];
        nums[1] = nums[0];
        nums[0] = 0;

        for (let i = 2; i < nums.length; i++) {
            let temp = nums[i];
            nums[i] = Math.min(nums[i - 1], min);
            min = Math.min(temp, min);
        }

        return nums;
    }
}

// console.log(ListMinReplacement.solve([10, 5, 7, 9]));
console.log(ListMinReplacement.solve([3, 2, 1, 0]));
