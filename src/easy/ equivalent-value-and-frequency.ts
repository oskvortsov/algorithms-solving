//https://binarysearch.com/problems/Equivalent-Value-and-Frequency
class EquivalentValueAndFrequency {
    static solve(nums: Array<number>): boolean {
        const store = {};

        nums.forEach(i => {
            store[i] = i in store ? store[i] + 1 : 1;
        });

        return !!Object.keys(store).find(key => store[key] == key);
    }
}

console.log(EquivalentValueAndFrequency.solve([7, 9, 3, 3, 3]));
console.log(EquivalentValueAndFrequency.solve([0, 0]));
