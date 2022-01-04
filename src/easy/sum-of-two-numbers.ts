// https://binarysearch.com/problems/Sum-of-Two-Numbers
class SumOfTwoNumbers {
  static solve(nums: Array<number>, k: number): boolean {
    if (nums.length < 2) {
      return false;
    }

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(k - nums[i])) {
            return true
        } else {
            set.add(nums[i]);
        }
    }


    return false;
  }
}

console.log(SumOfTwoNumbers.solve([35, 8, 18, 3, 22], 11) === true);
console.log(SumOfTwoNumbers.solve([1, 44], 44) === false);
