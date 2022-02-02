// https://binarysearch.com/problems/Most-Occurring-Number-After-K-Increments
class MostOccurringNumberAfterKIncrements {
    static solve(nums, k) {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let key = nums[i];
            map.set(key, (map.get(key) || 1) + 1);
        }

        let sortKeys = [...map.keys()].sort();

        for (let i = 0; i < sortKeys.length - 1; i++) {
            let diff = sortKeys[i + 1] - sortKeys[i];
            let operations = map.get(sortKeys[i]) * diff;

            if (k <= operations) {
                k -= operations;

                map.set(
                    sortKeys[i + 1],
                    map.get(sortKeys[i + 1]) + map.get(sortKeys[i])
                )

                
            }
        }

        return 2;
    }
}

console.log(MostOccurringNumberAfterKIncrements.solve([2, 0, 0, 0, 9, 9, 9, 9], 6), 2);
