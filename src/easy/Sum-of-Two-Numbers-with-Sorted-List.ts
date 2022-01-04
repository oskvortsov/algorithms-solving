// https://binarysearch.com/problems/Sum-of-Two-Numbers-with-Sorted-List

class SumOfTwoNumbersWithSortedList {
    static solve(nums, k) {
        let L = 0;
        let R = nums.length - 1;

        while (L < R) {
            let sum = nums[L] + nums[R];

            if (sum == k) return true;
            sum < k ? L++ : R--;
        }

        return false;
    }
}

class SumOfTwoNumbersWithSortedList1 {
    static solve(nums, k) {
        for (let i = 0; i < nums.length; i++) {
            let num = k - nums[i];

            if (num < 0) return false;

            if (binarySearch(nums, num, i)) {
                return true;
            }
        }

        return false;
    }
}

function binarySearch(nums, target, index) {
    let L = 0;
    let R = nums.length - 1;

    while (L <= R) {
        let mid = L + Math.floor((R - L) / 2);
        if (target == 1) debugger;

        if (nums[mid] == target && mid !== index) {
            return true;
        }

        if (nums[mid] < target) {
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return false;
}

console.log(SumOfTwoNumbersWithSortedList.solve([1, 3, 5, 8], 6));
