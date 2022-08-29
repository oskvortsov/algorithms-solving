//https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
    let L = 0;
    let R = height.length - 1;
    let max = (R - L) * Math.min(height[L], height[R]);

    while (L < R) {
        height[L] < height[R] ? L++ : R--;
        max = Math.max(max, Math.min(height[L], height[R]) * (R - L));
    }

    return max;
}

describe('Container With Most Water', () => {
    it('case 1', () => {
        expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
    })

    it('case 2', () => {
        expect(maxArea([2,3,10,5,7,8,9])).toBe(36);
    })

    it('case 3', () => {
        expect(maxArea([1, 2, 3, 4])).toBe(4);
    })
})
