// https://binarysearch.com/problems/Special-Product-List

class SpecialProductList1 {
    static solve(nums) {
        let size = nums.length;

        let prefix = new Array(nums.length + 1).fill(1);
        let suffix = new Array(nums.length + 1).fill(1);


        for (let i = 1; i <= size; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = size - 1; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i];
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = prefix[i] * suffix[i + 1];
        }

        return nums;
    }
}

class SpecialProductList {
   static solve(nums) {
        let size = nums.length - 1;

        let productsL = [];
        let productsR = [];

        let L = 1;
        let R = 1;

        for (let i = 0; i <= size; i++) {

            L *= nums[i];
            R *= nums[size - i];

            productsL.push(L);
            productsR.push(R);
        }

        nums[0] = productsR[size - 1];
        nums[size] = productsL[size - 1];

        for (let i = 1; i < nums.length - 1; i++) {
            nums[i] = productsL[i - 1] * productsR[size - (i + 1)];
        }

        return nums;
    }
}

console.log(SpecialProductList.solve([1, 2, 3, 4, 5]))
console.log(SpecialProductList.solve([1, 0]))
