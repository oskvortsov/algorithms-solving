// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    const hmap:Record<number, number[]> = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!(num in hmap)) hmap[num] = [];
        hmap[num].push(i);
    }

    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];

        if (val == nums[i]) {
            if (hmap[val].length > 1) {
                return hmap[val].slice(0, 2);
            }
        } else if (val in hmap) {
            return [i, hmap[val][0]].sort();
        }
    }
};
