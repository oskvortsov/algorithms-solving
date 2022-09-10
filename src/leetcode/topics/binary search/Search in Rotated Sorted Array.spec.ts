// https://leetcode.com/problems/search-in-rotated-sorted-array/

function binarySearch(nums: number[], target: number, L: number, R: number) {
    while (L <= R) {
        let mid = R - ~~((R - L) / 2);
        if (nums[mid] == target) return mid;
        nums[mid] < target ? L = mid + 1 : R = mid - 1;
    }

    return null;
}

function search(nums: number[], target: number): number {
    let L = 0;
    let R = nums.length - 1;
    let k = 0;

    while (L <= R) {
        let mid = R - ~~((R - L) / 2);
        if (nums[mid] == target) return mid;
        if (nums[L - 1] > nums[L]) {
            k = L;
            break;
        }

        if (nums[R - 1] > nums[R]) {
            k = R;
            break;
        }

        if (nums[L] < nums[mid]) {
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return binarySearch(nums, target, 0, k - 1) ?? binarySearch(nums, target, k, nums.length - 1) ?? -1;
}

describe('Search in Rotated Sorted Array', () => {
    it('case 1', () => {
        expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
    })

    it('case 2', () => {
        expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
    })

    it('case 3', () => {
        expect(search([1, 3], 1)).toBe(0);
    })

    it('case 4', () => {
        expect(search([1, 3], 3)).toBe(1);
    })

    it('case 5', () => {
        expect(search([3, 5, 1], 3)).toBe(0);
    })

    it('case 6', () => {
        expect(search([3,4,5,6,7,8,1,2], 2)).toBe(7);
    })
})
