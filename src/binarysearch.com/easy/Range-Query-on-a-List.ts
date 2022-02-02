// https://binarysearch.com/problems/Range-Query-on-a-List
class RangeQueryOnAList {
    nums = [];

    constructor(nums) {
        this.nums = nums;
    }

    total(start, end) {
        let res = 0;

        for (let i = start; i < end; i++) res += this.nums[i];

        return res;
    }
}
