// https://binarysearch.com/problems/Making-List-Values-Equal
class MakingListValuesEqual {
    static solve(nums) {
        let min = Infinity;
        let max = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            if (min > nums[i]) min = nums[i];
            if (max < nums[i]) max = nums[i];
        }

        return max - min;
    }
}

console.log(MakingListValuesEqual.solve([1, 3, 0]));
