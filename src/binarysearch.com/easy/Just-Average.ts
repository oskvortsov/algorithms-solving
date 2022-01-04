// https://binarysearch.com/problems/Just-Average
class JustAverage {
    static solve(nums, k) {
        let extraNum = nums.reduce((acc, i) => {
            acc += i;
            return acc;
        }) - k * (nums.length - 1);

        return nums.includes(extraNum);
    }
}
