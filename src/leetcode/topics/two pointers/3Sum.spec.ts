// https://leetcode.com/problems/3sum/

function twoSum(nums: number[], L: number, R: number, target: number) {
    let result = [];

    while (L < R) {
        const sum = nums[L] + nums[R] + target;

        if (sum == 0) {
            result.push([target, nums[L], nums[R]]);
            L++;

            while (nums[L] == nums[L - 1]) L++;
        } else {
            sum < 0 ? L++ : R--;
        }
    }

    return result;
}

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i - 1] !== nums[i]) {
            result.push(...twoSum(nums, i + 1, nums.length - 1, nums[i]));
        }
    }

    return result;
}

describe('3Sum', () => {
    it('case 1', () => {
        expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
    })

    it('case 2', () => {
        expect(threeSum([0,1,1])).toStrictEqual([]);
    })

    it('case 3', () => {
        expect(threeSum([0,0,0])).toStrictEqual([[0,0,0]]);
    })

    it('case 4', () => {
        expect(threeSum([0,0,0,0])).toStrictEqual([[0,0,0]]);
    })

    it('case 5', ()=> {
        expect(threeSum([-1,0,1,0])).toStrictEqual([[-1, 0, 1]]);
    })

    it('case 6', ()=> {
        expect(threeSum([-2,0,1,1,2])).toStrictEqual([[-2, 0, 2], [-2, 1, 1]]);
    })

    it('case 7', ()=> {
        expect(threeSum([3,0,-2,-1,1,2])).toStrictEqual([[-2,-1,3],[-2,0,2],[-1,0,1]]);
    })

    it('case 8', ()=> {
        expect(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])).toStrictEqual(
            [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
        );
    })
})
