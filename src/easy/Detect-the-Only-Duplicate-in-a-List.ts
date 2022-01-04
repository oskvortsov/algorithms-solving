// https://binarysearch.com/problems/Detect-the-Only-Duplicate-in-a-List

class DetectTheOnlyDuplicateInAList {
    static solve(nums) {
        let set = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                return nums[i];
            }
            set.add(nums[i]);
        }

        return -1;
    }
}

class DetectTheOnlyDuplicateInAList1 {
    static solve(nums) {
        let sum = 0;
        let sum2 = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            sum2 += i;
        }

        return sum - sum2;
    }
}

class DetectTheOnlyDuplicateInAList2 {
    static solve(nums) {
        let sum = nums.reduce((acc, i) => acc += i);
        let natSum = nums.length * (nums.length - 1) / 2;

        return sum - natSum;
    }
}



// res=(0^4)^(1^2)^(2^1)^(3^3)^(4^2)
//     =(0^2)^(1^1)^(2^2)^(3^3)^(4^4)
//     =2^0^0^0^0
//     =2

class DetectTheOnlyDuplicateInAList3 {
    static solve(nums) {
       return nums.reduce((acc, num, index) => acc ^= num ^ index);
    }
}

// console.log(DetectTheOnlyDuplicateInAList.solve([1,2,3,1 ]));
console.log(DetectTheOnlyDuplicateInAList1.solve([1,2,3,1 ]));
console.log(DetectTheOnlyDuplicateInAList2.solve([1,2,3,1 ]));
console.log(DetectTheOnlyDuplicateInAList3.solve([1,2,3,1 ]));
