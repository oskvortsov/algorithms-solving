// https://leetcode.com/problems/search-a-2d-matrix/

function binarySearch(nums: number[], target: number): number {
    let L = 0;
    let R = nums.length - 1;

    while (L <= R) {
        const mid = R - ~~((R - L) / 2);
        if (nums[mid] == target) return mid;
        nums[mid] < target ? L++ : R--;
    }

    return -1;
}

function searchMatrix(matrix: number[][], target: number): boolean {
    let top = 0;
    let down = matrix.length - 1;

    while (top <= down) {
        const mid = down - ~~((down - top) / 2);
        const row = matrix[mid];

        if (row[0] <= target && row[row.length - 1] >= target) {
            return binarySearch(row, target) !== -1;
        } else {
            row[0] < target ? top++ : down--;
        }
    }

    return false;
}

describe('Search a 2D Matrix', () => {
    it('case 1', () => {
        expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toBeTruthy();
    })

    it('case 2', () => {
        expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toBeFalsy();
    })

    it('case 3', () => {
        expect(searchMatrix([[1]], 1)).toBeTruthy();
    })

    it('case 4', () => {
        expect(searchMatrix([[1, 3]], 3)).toBeTruthy();
    })
})
