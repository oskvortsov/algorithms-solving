// https://binarysearch.com/problems/K-Compare
class KCompare {
  static solve(a, b, k) {
      if (k == 0) return a.length;
      b = b.sort((i, j) => i - j);
      let min = b[k - 1];
      let count = 0;

      for (const i of a) {
          if (i < min) count++;
      }

      return count;
  }
}

console.log(KCompare.solve([5, -3, 99, 10], [32, 5, 29, 7, 13], 3));
