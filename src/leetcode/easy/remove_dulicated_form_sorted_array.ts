// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

function removeDuplicates(nums: number[]): number {
  let index = 0;
  let k = 0;
  let prev = null;

  while (index < nums.length) {
    if (prev !== nums[index]) {
      nums[k] = nums[index];
      k++;
    }

    prev = nums[index++];
  }

  return k;
}

console.log(removeDuplicates([1, 1, 2]));
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2);
