// https://leetcode.com/problems/trapping-rain-water/

function getSum(L: number, R: number, heights: number[]): number {
    if (R >= heights.length) return 0;

    let sum = Math.min(heights[L], heights[R]) * (R - L - 1);

    for (let i = L + 1; i < R; i++) {
        sum -= heights[i];
    }

    return sum;
}

function trap1(height: number[]): number {
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

function trap(height: number[]): number {
    let l = 0;
    let r = height.length - 1;
    let res = 0;

    let lMax = height[l];
    let rMax = height[r];

    while (l < r) {
        if (height[l] < height[r]) {
            height[l] >= lMax ? lMax = height[l] : res += lMax - height[l];
            l++;
        } else {
            height[r] >= rMax ? rMax = height[r] : res += rMax - height[r];
            r--;
        }
    }

    return res;
}

describe("Trapping Rain Water", () => {
    it('case 1', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6)
    });

    it('case 2', () => {
        expect(trap([4,2,0,3,2,5])).toBe(9)
    });
})
