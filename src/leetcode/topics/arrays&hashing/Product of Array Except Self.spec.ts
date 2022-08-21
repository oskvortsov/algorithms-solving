// https://leetcode.com/problems/product-of-array-except-self/

function bit_division(a: number, b: number) {
    let ans = 0;
    let neg = a * b < 0 ? -1 : 1;

    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 30; i > -1; i--) {
        const cur = b << i;

        if (cur > 0 && cur <= a) {
            a -= cur;
            ans += 1 << i;
        }
    }

    return neg * ans;
}

// using bitwise division time O(n), space o(1)
function productExceptSelf1(nums: number[]): number[] {
    let countZero = 0;
    let product = 1;

    nums.forEach(num => num == 0 ? countZero++ : product *= num);

    if (countZero > 1) return nums.fill(0);

    return nums.map(num => {
        if (countZero > 0) return num ? 0 : product;
        return bit_division(product, num);
    });
}

// using prefix postfix time O(n), space O(n)
function productExceptSelf(nums: number[]): number[] {
    let answer = new Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] *= prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let i = nums.length - 1; i > -1; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }

    answer = answer.map(i => i == -0 ? 0 : i);

    return answer;
}



describe('Product of Array Except Self', () => {
    it('case 1', () => {
        expect(productExceptSelf([1,2,3,4])).toStrictEqual([24,12,8,6]);
    })

    it('case 2', () => {
        expect(productExceptSelf([-1,1,0,-3,3])).toStrictEqual([0,0,9,0,0]);
    })

    it('case 3', () => {
        expect(productExceptSelf([-1,1])).toStrictEqual([1,-1]);
    })
})
