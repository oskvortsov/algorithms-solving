function getSum(L: number, R: number, heights: number[]): number {
    if (R >= heights.length) return 0;

    let sum = Math.min(heights[L], heights[R]) * (R - L - 1);

    for (let i = L + 1; i < R; i++) {
        sum -= heights[i];
    }

    return sum;
}

function trap(height: number[]): number {
    let curSum = 0;
    let L = 0;
    let R = 1;
    let maxR = R;

    while (L < height.length) {
        if (height[L] <= height[R]) {
            curSum += getSum(L, R, height);
            L = R;
            R++;
            maxR = R
        } else if (R < height.length) {
            if (height[maxR] <= height[R]) {
                maxR = R;
            }
            R++
        } else {
            curSum += getSum(L, maxR, height);
            L = maxR;
            R = maxR + 1;
            maxR = R;
        }
    }

    return curSum;
}

describe("Trapping Rain Water", () => {
    it('case 1', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6)
    });

    it('case 2', () => {
        expect(trap([4,2,0,3,2,5])).toBe(9)
    });
})
