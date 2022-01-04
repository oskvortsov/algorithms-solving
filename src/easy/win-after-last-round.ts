//https://binarysearch.com/problems/Win-After-Last-Round
/*
  1. sorting swimmers by point min to max
  2. for all swim add number by size - i swimmer
  3. find max score after adding

  4 return all swimmers that can count maxScore

 */

class WinAfterLastRound {
  static solve(nums: Array<number>): number {
    const size = nums.length;
    const swims = nums.sort((a, b) => a - b);
    let maxScore = swims[size - 1] + 1;

    swims.forEach((swimmer, i) => maxScore =  Math.max(swimmer + (size - i), maxScore))

    return swims.filter(s => (s + size) >= maxScore).length;
  }
}

console.log(WinAfterLastRound.solve([8, 7, 10, 11]) == 3);
console.log(WinAfterLastRound.solve([0, 2, 2, 3]) == 3);
console.log(WinAfterLastRound.solve([0, 1]) == 2);
console.log(WinAfterLastRound.solve([1, 3, 3, 3]) == 3);
