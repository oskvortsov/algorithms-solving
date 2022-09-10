// https://leetcode.com/problems/search-insert-position/


function searchInsert(nums: number[], target: number): number {
    let L = 0;
    let R = nums.length - 1;

    while (L <= R) {
        let mid = R - ~~((R - L) / 2);
        if (nums[mid] == target) return mid;

        if (target < nums[mid]) {
            R = mid - 1;
        } else {
            L = mid + 1;
        }
    }

    return L;
}

describe("Search Insert Position", () => {
    it('case 1', () => {
        expect(searchInsert([1,3,5,6], 5)).toBe(2);
    })

    it('case 2', () => {
        expect(searchInsert([1,3,5,6], 2)).toBe(1);
    })

    it('case 3', () => {
        expect(searchInsert([1,3,5,6], 7)).toBe(4);
    })
})
