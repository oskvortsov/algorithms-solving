// Missing-Numbers-From-1-to-N
class MissingNumbersFrom1ToN {
    static solve(nums) {
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let pos = Math.abs(nums[i]) - 1;
            nums[pos] = -1 * Math.abs(nums[pos]);
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) result.push(i + 1);
        }

        return result;
    }
}

console.log(MissingNumbersFrom1ToN.solve([3, 3, 1, 1, 5, 5]))
