class ReverseSublistsToConvertToTarrget {
    static solve (nums: number[], target: number[]) {
        if (nums.length !== target.length) {
            return false;
        }

        let numCount = {};
        let targetCount = {};

        for (let i = 0; i < nums.length; i++) {
            numCount[nums[i]] = (numCount[nums[i]] | 0) + 1;
            targetCount[target[i]] = (targetCount[target[i]] | 0) + 1;
        }

        return Object.keys(numCount).find(key => numCount[key] !== targetCount[key]) == undefined;
    }
}

console.log(ReverseSublistsToConvertToTarrget.solve([2, 2], [3, 3]));
