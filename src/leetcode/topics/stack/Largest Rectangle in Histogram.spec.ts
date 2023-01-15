// https://leetcode.com/problems/largest-rectangle-in-histogram/

function largestRectangleArea(heights: number[]): number {
    let monoStack = [];

    for (let i = 0; i < heights.length - 1; i++) {
        let min = 0;

        for (let j = 0; j < heights.length; j++) {
            if (i == j) continue;

        }
    }

    return 1;
}

describe('Largest Rectangle in Histogram', () => {
    it('case 1', () => {
        expect(largestRectangleArea([2,1,5,6,2,3])).toBe(10);
    })

    it('case 2', () => {
        expect(largestRectangleArea([2,4])).toBe(4);
    })
})
