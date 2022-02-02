// https://binarysearch.com/problems/Dividing-Station

class DividingStation {
  static solve(nums) {
    if (nums.length < 2) return nums.length;
    nums = nums.sort((a, b) => a - b);

    let temp = 0;
    let best = 0;

    for (let i in nums) {
        for (let j in nums) {
            if (i == j || (nums[i] % nums[j] == 0 || nums[j] % nums[i] == 0)) {
                temp++;
            }
        }
        best = Math.max(best, temp);
        temp = 0;
    }

    return best;
  }
}

class DividingStation1 {
  static solve(nums) {
    if (nums.length < 2) return nums.length;

    let subCount = 1;
    let best = 0;

    let i = 0;
    let prev = 0;
    let j = 1;

    while (i < nums.length && j < nums.length) {
      if (
        (nums[i] % nums[j] == 0 || nums[j] % nums[i] == 0) &&
        (nums[prev] % nums[j] == 0 || nums[j] % nums[prev] == 0)
      ) {
        prev = j;
        j++;
        subCount++;
      } else {
        best = Math.max(best, subCount);
        subCount = 1;
        i++;
        prev = i;
        j = i + 1;
      }
    }

    best = Math.max(best, subCount);

    return best;
  }
}

console.log(DividingStation.solve([2, 1]), 2);
console.log(DividingStation.solve([2, 3, 1, 4]), 3);
console.log(DividingStation.solve([3, 5, 10, 20, 21]), 3);
console.log(DividingStation.solve([1, 3, 6, 24]), 4);
console.log(DividingStation.solve([2, 1, 3]), 2);
console.log(DividingStation.solve([1, 3, 2]), 2);
