// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3260/

// approach O(N^2) time, O(1) space
function sortArrayByParity1(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            let evenIndex = -1;
            let j = i + 1;

            while (j < nums.length && evenIndex == -1) {
                if (nums[j] % 2 == 0) evenIndex = j;
                j++;
            }

            if (evenIndex == -1) break;
            [nums[i], nums[evenIndex]] = [nums[evenIndex], nums[i]];
        }
    }

    return nums;
}

/***
 *
 * Algorithm
 *
 * We'll maintain two pointers i and j. The loop invariant is everything below i has parity 0 (ie. A[k] % 2 == 0 when k < i), and everything above j has parity 1.
 *
 * Then, there are 4 cases for (A[i] % 2, A[j] % 2):
 *
 * If it is (0, 1), then everything is correct: i++ and j--.
 *
 * If it is (1, 0), we swap them so they are correct, then continue.
 *
 * If it is (0, 0), only the i place is correct, so we i++ and continue.
 *
 * If it is (1, 1), only the j place is correct, so we j-- and continue.
 *
 * Throughout all 4 cases, the loop invariant is maintained, and j-i is getting smaller. So eventually we will be done with the array sorted as desired.
 */
// solution O(N) time, O(1) space
function sortArrayByParity(nums: number[]): number[] {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] % 2 > nums[j] % 2) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        if (nums[i] % 2 == 0) i++;
        if (nums[j] % 2 == 1) j--;
    }

    return nums;
}

describe('Sort Array By Parity', () => {
    // it('case 1', () => expect(sortArrayByParity([3,1,2,4])).toEqual([2,4,3,1]));
    it('case 1', () => expect(sortArrayByParity([3,1,2,4])).toEqual([4,2,1,3]));
    it('case 2', () => expect(sortArrayByParity([0])).toEqual([0]));
})
