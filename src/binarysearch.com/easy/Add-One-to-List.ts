// https://binarysearch.com/problems/Add-One-to-List
class AddOneToList {
    static solve(nums) {
        let isSeniorRank = true;
        let index = nums.length - 1;

        while (isSeniorRank) {
            if (nums[index] + 1 > 9) {
                isSeniorRank = true;

                nums[index] = 0;

                if (index == 0) {
                    nums = [1, ...nums];
                    isSeniorRank = false;
                }
            } else {
                isSeniorRank = false;
                nums[index] += 1;
            }

            index--;
        }

        return nums;
    }
}

console.log(AddOneToList.solve([1, 9, 1]))
console.log(AddOneToList.solve([9, 9, 9]))
console.log(AddOneToList.solve([2]))
