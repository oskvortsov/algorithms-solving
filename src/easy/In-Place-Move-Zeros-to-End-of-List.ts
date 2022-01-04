// https://binarysearch.com/problems/In-Place-Move-Zeros-to-End-of-List


// Second decision we could make the same but in line
class InPlaceMoveZerosToEndOfList {
    static solve(nums) {
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                [nums[i], nums[count]] = [nums[count], nums[i]];
                count++;
            }
        }

        return nums;
    }
}


// First decision I count zero and just moved the item in previous place zero
class InPlaceMoveZerosToEndOfList1 {
    static solve(nums) {
        let countZero = 0;

        for (let i = 0; i < nums.length; i++) {
            nums[i] == 0 ? countZero++ : nums[i - countZero] = nums[i];
        }

        for (let i = nums.length - countZero; i < nums.length; i++) nums[i] = 0;

        return nums;
    }
}

console.log(InPlaceMoveZerosToEndOfList.solve([0, 1, 0, 2, 3]));
