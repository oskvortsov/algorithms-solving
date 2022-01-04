//https://binarysearch.com/problems/Strictly-Alternating-List
class StrictlyAlternatingList {
  solve(nums: Array<number>): boolean {
    if (nums[0] >= nums[1]) return false;

    for (let i = 2; i < nums.length; i++) {
      if (nums[i - 1] === nums[i]) {
        return false;
      }
    }

    return true;
  }
}
