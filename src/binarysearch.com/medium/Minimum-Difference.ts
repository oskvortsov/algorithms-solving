// https://binarysearch.com/problems/Minimum-Difference
class MinimumDifference {
    static solve(lst0, lst1) {
        lst0 = lst0.sort((a, b) => a - b);
        lst1 = lst1.sort((a, b) => a - b);

        let i = 0;
        let j = 0;

        let min = Math.abs(lst0[i] - lst1[j]);

        while (i < lst0.length || j < lst1.length) {
            let L = i < lst0.length - 1 ? Math.abs(lst0[i + 1] - lst1[j]) : Infinity;
            let R = j < lst1.length - 1 ? Math.abs(lst0[i] - lst1[j + 1]) : Infinity;

            if (L == Infinity && R == Infinity) break;

            min = Math.min(min, L, R);

            L < R ? i++ : j++;
        }

        return min;
    }
}

console.log(MinimumDifference.solve([1, 6, 3], [15, 9, 10]));
console.log(MinimumDifference.solve([0, 1, 1], [0]));
console.log(MinimumDifference.solve([0, 1], [0]));
console.log(MinimumDifference.solve([0], [1, 0, 0]));
console.log(MinimumDifference.solve([0, 2, 2], [1, 0]));
// console.log(MinimumDifference.solve([9,9,9,9,1,98,9,9,9,9], [100,100,100,100,100,99,100,1001,100,100]));
