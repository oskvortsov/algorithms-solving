// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3228/

function heightChecker(heights: number[]): number {
    let expected = [...heights].sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== heights[i]) count++;
    }

    return count;
}

describe('Height Checker', () => {
    it('case 1', () => expect(heightChecker([1,1,4,2,1,3])).toBe(3));
    it('case 2', () => expect(heightChecker([5,1,2,3,4])).toBe(5));
    it('case 3', () => expect(heightChecker([1,2,3,4,5])).toBe(0));
    it('case 4', () => expect(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7])).toBe(22));
})
