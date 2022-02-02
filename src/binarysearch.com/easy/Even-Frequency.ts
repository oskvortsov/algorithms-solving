// https://binarysearch.com/problems/Even-Frequency

class EvenFrequency2 {
    static solve(nums) {
        let a = 0, b = 0, c = 0;
        for (let i = 0; i < nums.length; i++) {
            a ^= nums[i];
            b ^= nums[i] + 1;
            c ^= nums[i] - 1;
        }

        return !a && !b && !c;
    }
}

class EvenFrequency {
    static solve(nums) {
        return !nums.reduce((acc, num) => acc ^= (num || -1) >> 1, 0);
    }
}

class EvenFrequency1 {
    static solve(nums) {
        if (!nums.length) return false;

        nums = nums.sort((a, b) => a - b);

        let prev = nums[0];
        let count = 1;

        for (let i = 1; i < nums.length; i++) {
            if (prev !== nums[i]) {
                prev = nums[i];

                if (count < 2 || count % 2 !== 0) return false;
                count = 0;
            }

            count++;
        }

        return !(count < 2 || count % 2 !== 0);
    }
}

console.log(EvenFrequency.solve([2,4,4,2,3,3]));
console.log(EvenFrequency.solve([1]));
console.log(EvenFrequency.solve([0]));
console.log(EvenFrequency.solve([2, 1, 3]));
console.log(EvenFrequency.solve([[0, 2, 4, 6]]));
