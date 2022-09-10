// https://leetcode.com/problems/trapping-rain-water/

function trap(height: number[]): number {
    let size = height.length;
    let leftMax = new Array(size).fill(0);
    let rightMax = new Array(size).fill(0);

    leftMax[0] = height[0];
    for (let i = 1; i < size; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    rightMax[size - 1] = height[size - 1];
    for (let i = size - 2; i > -1; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let res = 0;
    for (let i = 0; i < size; i++) res += Math.min(leftMax[i], rightMax[i]) - height[i];

    return res;
}

describe("Trapping Rain Water: Dynamic Programming Approach", () => {
    it('case 1', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6)
    });

    it('case 2', () => {
        expect(trap([4,2,0,3,2,5])).toBe(9)
    });
})
