// https://binarysearch.com/problems/Largest-Pair-of-Points
class LargestPairOfPoints {
    static solve(nums: number[], values) {
        let dif = -Infinity;
        let sum = -Infinity;

        for (let i in nums) {
            dif = Math.max(dif, values[i] - nums[i]);
            sum = Math.max(sum, values[i] + nums[i]);
        }

        return sum + dif;
    }
}

console.log(LargestPairOfPoints.solve(
    [0, 1, 6],
    [-5, 5, 4]
))

console.log(LargestPairOfPoints.solve(
    [3, 5],
    [1, 5]
))
