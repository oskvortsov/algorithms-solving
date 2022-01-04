// https://binarysearch.com/problems/Repeated-Addition
class RepeatedAddition {
    static solve(nums) {
        while (nums > 9) nums = addEachNum(nums);
        return nums;
    }
}

function addEachNum(nums) {
    return String(nums).split('').reduce((acc, num) => acc += +num, 0);
}

console.log(RepeatedAddition.solve(8835));
