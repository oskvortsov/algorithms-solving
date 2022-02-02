// https://binarysearch.com/problems/Minimize-Amplitude-After-Deleting-K-Length-Sublist
class MinimizeAmplitudeAfterDeletingKLengthSublist {
  static solve(nums, k) {
      const summs = [];

      if (k) {
          let count = 0
          for (let num of nums) {
              summs.push(count += num);
          }

          let maxI = 0;
          for (let i = 0; i < summs.length - k; i++) {
              if (summs[i + k] - summs[i] > summs[maxI + k] - summs[maxI]) {
                  maxI = i;
              }
          }

          nums.splice(maxI + 1, k);

      }


      return Math.max(...nums) - Math.min(...nums);
  }
}

// [ 1, 3, 12, 20, 27, 30 ]
console.log(
  MinimizeAmplitudeAfterDeletingKLengthSublist.solve([1, 2, 9, 8, 7, 3], 3), 2
);

console.log(
    MinimizeAmplitudeAfterDeletingKLengthSublist.solve([0, 2, 2], 1), 0
)
