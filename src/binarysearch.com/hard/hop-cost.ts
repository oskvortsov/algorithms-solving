// https://binarysearch.com/problems/Hop-Cost

class HopCost {
    static solve(nums0: Array<number>, nums1: Array<number>, dist: number, cost: number): number {
        let sum = 0;
        let index = 0;
        let direct = null;

        while (index < nums0.length) {
            let next = index + dist;
            if (next > nums0.length - 1) next = nums0.length - 1;


        }
    }
}

console.log(HopCost.solve([0,1,2], [1,2,0], 3, 2), 1);
console.log(HopCost.solve([0, 1], [0, 1], 2, 1), 1);
console.log(HopCost.solve([1, 2, 9, 9, 5], [9, 9, 3, 4, 100], 2, 3), 15);
console.log(HopCost.solve([5], [3], 2, 2), 3);
console.log(HopCost.solve([1, 0, 0], [0, 0, 1], 2, 2), 1);
