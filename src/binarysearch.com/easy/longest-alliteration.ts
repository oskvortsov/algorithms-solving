//https://binarysearch.com/problems/Longest-Alliteration
class Solution {
  solve(words: Array<string>): number {
    if (words.length < 1) return words.length;

    let strike = 1;
    let max = 1;

    for (let i = 1; i < words.length; i++) {
      words[i - 1][0] === words[i][0] ? strike++ : (strike = 1);

      if (max < strike) {
        max = strike;
      }
    }

    return max;
  }
}
