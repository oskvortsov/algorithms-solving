// https://binarysearch.com/problems/Largest-Sum-After-K-Negations
class LargestSumAfterKNegations {
    static solve(nums, k) {
        let lessZero = nums.filter(i => i < 0).sort((a, b) => a - b);
        const moreZero = nums.filter(i => i >= 0);

        let min = 0;


        for (let i = 0; i < lessZero.length; i++) {
            if (k) {
                lessZero[i] = Math.abs(lessZero[i]);
                k--;
            }

            if (k == 0) break;
        }

        if (k % 2 != 0) {
            min = -Math.min(...lessZero, ...moreZero) * 2;
        }

        return [...lessZero, ...moreZero].reduce((acc, i) => acc += i, min);
    }
}

class LargestSumAfterKNegations1 {
    static solve(nums, k) {
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (k && nums[i] < 0) {
                nums[i] = Math.abs(nums[i]);
                k--;
            }

            if (k == 0) break;
        }

        let min = k % 2 !== 0 ? -2 * Math.min(...nums) : 0;
        return nums.reduce((acc, i) => acc + i, min);
    }
}

// console.log(LargestSumAfterKNegations.solve([1, 0, -5, -3], 4))
// console.log(LargestSumAfterKNegations.solve([1, 1], 1))
// console.log(LargestSumAfterKNegations.solve([-1, -2, -3, -4], 1))
console.log(LargestSumAfterKNegations1.solve([0, 1], 9))
