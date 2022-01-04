// https://binarysearch.com/problems/Split-List

class SplitList {
    static solve(nums) {
        if (nums.length < 2) return false;

        let last = nums.length - 1;
        let max = last;

        for (let i = last; i > 0; i--) {
            if (nums[max] < nums[i]) max = i;
        }

        let min = last
        for (let i = max + 1; i < nums.length; i++) {
            if (nums[min] > nums[i]) min = i;
        }

        for (let i = 0; i < max; i++) {
            if (nums[i] >= nums[min]) return false;
        }

        return true;
    }
}

console.log(SplitList.solve([2, 1, 2]));
console.log(SplitList.solve([0, 0, 1]));
console.log(SplitList.solve([2, 0, 0, 3]));
console.log(SplitList.solve([2, 0, 1, 3]));
console.log(SplitList.solve([5, 3, 2, 6, 1, 7, 9]));
// console.log(SplitList.solve([0, 0, 1]) == true);
// console.log(SplitList.solve([0]) == false);
// console.log(SplitList.solve([0, 0]) == false);
// console.log(SplitList.solve([1, 0]) == false);
// console.log(SplitList.solve([0, 1]) == true);
// console.log(SplitList.solve([1, 2, 0]) == false);
// console.log(SplitList.solve([2, 1, 2, 3]) == true);
// console.log(SplitList.solve([2, 1, 2]), false);
// console.log(SplitList.solve([1, 0, 2, 1]), false);
// console.log(SplitList.solve([2, 1, 2]), false);
// console.log(SplitList.solve([0, 1, 2, 1]), true);
// console.log(SplitList.solve([5, 3, 2, 9, 7]), true);
// console.log(SplitList.solve([0, 1, 2, 1]), true);
// console.log(SplitList.solve([0, 2, 1]), true);
// console.log(SplitList.solve([1, 1]), false);
// console.log(SplitList.solve([0, 0]), false);
// console.log(SplitList.solve([0, 0, 1]));
// console.log(SplitList.solve([1, 0]));
// console.log(SplitList.solve([1, 0]));
// console.log(SplitList.solve([0, 0, 0]));
