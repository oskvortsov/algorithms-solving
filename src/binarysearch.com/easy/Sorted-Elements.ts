// https://binarysearch.com/problems/Sorted-Elements
class SortedElements {
    static solve(nums) {
        const sortedNums = [...nums].sort((a, b) => a - b);
        let count = 0;


        for (let i in nums) {
            if (sortedNums[i] == nums[i]) count++;
        }

        return count;
    }
}

console.log(SortedElements.solve([1, 7, 3, 4, 10]));
