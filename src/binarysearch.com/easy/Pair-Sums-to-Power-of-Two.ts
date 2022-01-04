// https://binarysearch.com/problems/Pair-Sums-to-Power-of-Two
class PairSumsToPowerOfTwo {
    static solve(nums) {
        let twoInAllPowers = new Set<number>();
        let temp = 1;

        for (let k = 0; k < 31; k++) {
            twoInAllPowers.add(temp);
            temp <<= 1;
        }

        let numbers = new Map();
        for (let i = 0; i < nums.length; i++) {
            let key = nums[i];

            if (!numbers.has(key)) numbers.set(key, []);

            let value = numbers.get(key);
            value.push(i);

            numbers.set(key, value);
        }

        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            for (let twoInPower of twoInAllPowers) {
                let key = twoInPower - nums[i];

                if (numbers.has(key)) {
                    count += numbers.get(key).filter(j => j > i).length;
                }
            }
        }

        return count;
    }
}

function nextPow(x) {
    // x--;
    console.log(Number(x).toString(2));
    x |= x >> 1;
    console.log(Number(x).toString(2));
    x |= x >> 2;
    console.log(Number(x).toString(2));
    x |= x >> 4;
    console.log(Number(x).toString(2));
    x |= x >> 8;
    console.log(Number(x).toString(2));
    x |= x >> 16;
    console.log(Number(x).toString(2));

    return x;
}

// console.log(PairSumsToPowerOfTwo.solve([1, 1, 3, 5]))
console.log(nextPow(17));
