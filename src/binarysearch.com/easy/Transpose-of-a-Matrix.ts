// https://binarysearch.com/problems/Transpose-of-a-Matrix
class TransposeOfAMatrix {
  static solve(matrix) {
      const size = matrix.length;
      for (let r = 0; r < size; r++) {
          for (let c = r + 1; c < size; c++) {
              let temp = matrix[r][c];
              matrix[r][c] = matrix[c][r];
              matrix[c][r] = temp;
          }
      }

      return matrix;
  }
}

console.log(
  TransposeOfAMatrix.solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
