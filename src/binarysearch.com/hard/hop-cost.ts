// https://binarysearch.com/problems/Hop-Cost
class HopCost {
    static solve(nums0: Array<number>, nums1: Array<number>, dist: number, cost: number): number {
        let indexMin = nums0[0] < nums1[1] ? 0 : 1;
        let result = Math.min(nums0[0], nums1[0]);
        let size = nums0.length;

        for (let i = dist; i < nums0.length; i += (i + dist) > size ? size - i : dist) {
            let index = -1;
            if (nums0[i] < nums1[i]) {
                result += nums0[i];
                index = 0;
            } else {
                result += nums1[i];
                index = 1;
            }

            if (indexMin !== index) {
                result += cost;
                indexMin = index;
            }
        }

        return result;
    }
}

// console.log(HopCost.solve([1, 2, 9, 9, 5], [9, 9, 3, 4, 100], 2, 3));
// console.log(HopCost.solve([5], [3], 2, 2));
console.log(HopCost.solve([0, 1], [0, 1], 2, 0));
