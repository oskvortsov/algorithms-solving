// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers: number[], target: number): number[] {
    let L = 0;
    let R = numbers.length - 1;

    while (L < R) {
        let sum = numbers[L] + numbers[R];

        if (sum == target) {
            return [L + 1, R + 1];
        }

        sum < target ? L++ : R--;
    }
}

describe(' Two Sum II - Input Array Is Sorted', () => {
    it('case 1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
    })

    it('case 2', () => {
        expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
    })

    it('case 3', () => {
        expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
    })
})
