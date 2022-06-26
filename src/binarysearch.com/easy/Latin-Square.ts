// https://binarysearch.com/problems/Latin-Square
class LatinSquare {
  static solve(matrix) {
    let n = matrix.length;
    let dict = new Set();

    let colums = new Map();

    for (let i = 0; i < n; i++) {
      let row = new Set();

      if (!colums.has(i)) {
        colums.set(i, new Set());
      }

      for (let j = 0; j < n; j++) {
        row.add(matrix[i][j]);
        dict.add(matrix[i][j]);
        colums.get(i).add(matrix[j][i]);
      }

      if (row.size < n || dict.size > n) return false;
    }

      console.log(colums);
    return ![...colums.values()].some((set) => set.size != n);
  }
}

console.log(
  LatinSquare.solve([
    ['a', 'b', 'c', 'd'],
    ['b', 'a', 'd', 'c'],
    ['c', 'd', 'a', 'b'],
    ['d', 'z', 'b', 'a'],
  ]),
);

// console.log(
//   LatinSquare.solve([
//     ['a', 'b', 'c'],
//     ['c', 'a', 'b'],
//     ['b', 'c', 'a'],
//   ]),
// );
//
// console.log(
//   LatinSquare.solve([
//     ['a', 'b', 'c'],
//     ['a', 'b', 'c'],
//     ['a', 'b', 'c'],
//   ]),
// );
