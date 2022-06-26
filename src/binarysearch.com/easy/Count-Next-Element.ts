// https://binarysearch.com/problems/Count-Next-Element
class CountNextElement {
    static solve(nums) {
        let set = new Set(nums);
        let count = 0;

        for (const i of nums) {
            if (set.has(i + 1))  count++;
        }

        return count;
    }
}

console.log(CountNextElement.solve([3, 1, 2, 2, 7]));
