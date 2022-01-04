// https://binarysearch.com/problems/Mixed-Sorting
class MixedSorting {
    static solve(nums) {
        if (nums.length < 2) {
            return nums;
        }

        let orders = [];
        let odds = [];
        let evens = [];

        for (let i = 0; i < nums.length; i++) {
            let isEven = nums[i] % 2 == 0;
            orders.push(isEven);
            isEven ? evens.push(nums[i]) : odds.push(nums[i]);
        }

        odds = odds.sort((a, b) => b - a);
        evens = evens.sort((a, b) => a - b);


        for (let i = 0; i < orders.length; i++) {
            nums[i] = orders[i] ? evens.shift() : odds.shift();
        }

        return nums;
    }
}

console.log(MixedSorting.solve([8,13,11,90,-5,4]));
