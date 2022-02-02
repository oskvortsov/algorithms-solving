// https://binarysearch.com/problems/Shortest-Sublist-to-Sort
class ShortestSublistToSort {
    static solve(nums) {
        if (nums.length < 2) return 0;

        let min = Infinity;
        let L = null;
        let R = null;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[i + 1]) {
                R = i + 1;

                if (L == null) L = i;
            }

            if (L !== null && nums[i] < nums[L]) {
                R = i;
                min = Math.min(nums[i], min);
            }
        }

        for (let i = L; i >= 0; i--) {
            if (nums[i] > min) L = i;
        }


        return R !== L ? R - L + 1 : 0;

    }
}

console.log(ShortestSublistToSort.solve([2, 0, 1]) , 3);
console.log(ShortestSublistToSort.solve([1, 0, 3, 1]), 4);
console.log(ShortestSublistToSort.solve([0, 1, 0]) , 2);
console.log(ShortestSublistToSort.solve([0, 1, 4, 3, 8, 9]), 2);
console.log(ShortestSublistToSort.solve([1, 2, 0]), 3);
console.log(ShortestSublistToSort.solve([2, 1, 0]), 3);
console.log(ShortestSublistToSort.solve([1, 0]), 2);
console.log(ShortestSublistToSort.solve([2, 0, 0]), 3);
console.log(ShortestSublistToSort.solve([2, 0, 2]), 2);
