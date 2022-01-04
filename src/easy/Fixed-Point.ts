// https://binarysearch.com/problems/Fixed-Point

class FixedPoint {
    static solve(nums) {
        let L = 0;
        let R = nums.length - 1;

        while (L <= R) {
            let mid = L + Math.floor((R - L) / 2);
            nums[mid] < mid? L = mid + 1 : R = mid - 1;
        }

        return L !== null ? L : -1;
    }
}

console.log(FixedPoint.solve([-5, -2, 0, 3, 4]));
console.log(FixedPoint.solve([-5, 1, 2, 3, 4, 5, 6]));
console.log(FixedPoint.solve([-1, 1]));
console.log(FixedPoint.solve([-2, 0, 2]));
console.log(FixedPoint.solve([-5]));
console.log(FixedPoint.solve([0]));
console.log(FixedPoint.solve([0, -1]));
