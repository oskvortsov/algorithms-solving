// https://binarysearch.com/problems/Group-Integers

class GroupIntegers {
    static solve(nums: number[]) {
        let table = {};
        nums.forEach(num => table[num] = (table[num] | 0) + 1);

        let gcdNum = table[nums[0]];
        Object.keys(table).forEach(key => gcdNum = gcd(table[key], gcdNum));

        return gcdNum > 1;
    }
}

function gcd(a, b) {
    return a == 0 ? b : gcd(b % a, a);
}

console.log(GroupIntegers.solve([2, 2]));
console.log(GroupIntegers.solve([2,6,6,2,2,6,2,2,2,6]));
console.log(GroupIntegers.solve([2, 2, 3, 5, 8, 3, 5, 8]));
