//https://binarysearch.com/problems/Changing-Directions
class ChangingDirections {
    solve(nums: Array<number>): number {
        if (nums.length < 3) return 0;

        let count = 0;

        for (let i = 1; i < nums.length; i +=2) {
            if ((nums[i - 1] - nums[i]) * (nums[i] - nums[ i+ 1]) < 0) count++;
            if (i > 1 && (nums[i - 2] - nums[i - 1]) * (nums[i - 1] - nums[ i]) < 0) count++;
        }

        return count;
    }
}
