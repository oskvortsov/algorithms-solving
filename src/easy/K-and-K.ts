// https://binarysearch.com/problems/K-and-K

class KAndK {
    static solve(nums) {
        let table = {};

        nums.forEach(num => {
            let key = Math.abs(num);

            if (table[key] == undefined) {
                table[key] = {
                    pos: undefined,
                    neg: undefined
                }
            }

            if (key == 0) {
                table[key] = {
                    pos: 0,
                    neg: 0
                }
            } else {
                num > 0 ? table[key].pos = num : table[key].neg = num;
            }
        })

        for (let key in table) {
            if (table[key].pos == undefined || table[key].neg == undefined) {
                delete table[key];
            }
        }

        return Math.max(...Object.keys(table).map(char => +char), -1);
    }
}

class KAndK1 {
    static solve(nums) {
        let set = new Set(nums); // O(n)
        let max = -Infinity; // O(1)

        for (let num of set) { // O(n)
            if ((set.has(num) && set.has(-num) || num == 0) && max < num) {
                max = num as number;
            }
        }

        return Math.max(max, -1);
    }
}

class KAndK2 {
    static solve(nums) {
        let set = new Set();
        let max = -1;

        nums.forEach(num => {
            set.add(num);
            if (set.has(-num)) max = Math.max(Math.abs(num), max);
        })

        return max;
    }
}

// console.log(KAndK.solve([-4, 1, 8, -5, 4, -8]) == 8);
// console.log(KAndK.solve([-3, 0]) == 0);


console.log(KAndK2.solve([-4, 1, 8, -5, 4, -8]) == 8);
console.log(KAndK2.solve([-3, 0]) == 0);

