// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3231/



/*
    [x,y,z]
    case 1: w > x -> [w, x, z]
    case 2: w < x & w > y -> [x, w, y]
    case 3: w > z -> [x, y, w]
    case 4: w < z -> [x, y, z]
 */


function thirdMax(nums: number[]): number {
    let max = [-Infinity, -Infinity, -Infinity];


    for (let num of nums) {
        if (max.includes(num)) continue;
        if (max[0] < num) {
            max[2] = max[1];
            max[1] = max[0];
            max[0] = num;
        } else if (max[1] < num) {
            max[2] = max[1];
            max[1] = num;
        } else if (max[2] < num) {
            max[2] = num;
        }
    }

    return max[2] === -Infinity ? max[0] : max[2];
}

describe('Third Maximum Number', () => {
    it('case 1', () => expect(thirdMax([3,2,1])).toBe(1));
    it('case 2', () => expect(thirdMax([2,1])).toBe(2));
    it('case 3', () => expect(thirdMax([2,2,3,1])).toBe(1));
})
