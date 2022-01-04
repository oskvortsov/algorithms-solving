// https://binarysearch.com/problems/Big-Numbers

class BigNumbers {
  static solve(matrix) {
      let rowMax = [];
      let columnMax = []

      for (let i = 0; i < matrix.length; i++) {
          rowMax[i] = matrix[i][0];
          columnMax[i] = matrix[0][i];

          for (let j = 0; j < matrix.length; j++) {
              rowMax[i] = Math.max(rowMax[i], matrix[i][j]);
              columnMax[i] = Math.max(columnMax[i], matrix[j][i]);
          }
      }

      return [rowMax, columnMax];
  }
}


console.log(BigNumbers.solve([
    [2, 3]
]))

console.log(
  BigNumbers.solve([
    [1, 3, 2],
    [6, 6, 5],
    [1, 5, 7],
  ]),
);

console.log(BigNumbers.solve(
    [[1,2,3,2],[3,2,3,2],[1,2,2,3],[1,1,1,1]]
))
