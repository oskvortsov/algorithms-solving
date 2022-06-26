// https://binarysearch.com/problems/Equivalent-Pairs
class EquivalentPairs {
  static solve(nums) {
    let map = new Map();
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
      let val = map.get(nums[i]) || 0;
      result += val;
      map.set(nums[i], val + 1);
    }

    return result;
  }
}

console.log(EquivalentPairs.solve([3, 2, 3, 2, 2]), 4);
