// https://binarysearch.com/problems/Square-of-a-List

class SquareOfAList {
    static solve(nums) {
        let r = nums.length - 1;
        let l = 0;
        const result = new Array(nums.length).fill(0);

        let index = r;

        while(index > -1) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                result[index] = nums[l] * nums[l];
                l++;
            } else {
                result[index] = nums[r] * nums[r];
                r--;
            }
            index--;
        }

        return result;
    }
}


class SquareOfAList1 {
    static solve(nums) {
        let index = 0;
        let negative = [];
        let positive = [];

        for (const i of nums) {
            i < 0 ? negative.push(i * i) : positive.push(i * i);
        }

        negative = negative.reverse();

        let m = 0;
        let n = 0;

        while (m < negative.length || n < positive.length) {
            let isNegative = n == positive.length || (m !== negative.length && negative[m] <= positive[n]);
            nums[index++] = isNegative ? negative[m++] : positive[n++];
        }

        return nums;
    }
}

console.log(SquareOfAList.solve([-9, -2, 0, 2, 3]));
