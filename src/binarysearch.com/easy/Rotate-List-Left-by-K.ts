// https://binarysearch.com/problems/Rotate-List-Left-by-K
class RotateListLeftByK {
    static solve(nums, k) {

    }
}

class RotateListLeftByK1 {
    static solve(nums, k) {
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
        reverse(nums, 0, nums.length - 1);

        return nums;
    }
}

function reverse(nums, start, end) {
    for (let i = 0; i <= (end - start) / 2; i++) {
        [nums[i + start], nums[end - i]] = [nums[end - i], nums[i + start]];
    }
}

console.log(RotateListLeftByK1.solve([1, 2, 3, 4, 5, 6], 2));
