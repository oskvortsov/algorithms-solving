//https://binarysearch.com/problems/Append-List-to-Sum-Target
class AppendListToSumTarget {
    static solve(nums, k, target) {
        for (let num of nums) target -= num;
        target = Math.abs(target);

        return Math.floor(target / k) + (target % k ? 1 : 0);
    }
}


console.log(AppendListToSumTarget.solve(
    [0, 1], 1, 0
))

console.log(AppendListToSumTarget.solve(
    [2, 1], 3, 10
))

console.log(AppendListToSumTarget.solve(
    [2, 1], 2, -4
))
