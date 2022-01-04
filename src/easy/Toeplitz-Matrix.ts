// https://binarysearch.com/problems/Toeplitz-Matrix
class ToeplitzMatrix {
  static solve(matrix) {
    let result = true;

    for (let i = matrix.length; i --; i > 1) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i - 1] && matrix[i - 1][j - 1] !== undefined && matrix[i][j] !== matrix[i - 1][j - 1]) {
            result = false;
            break;
        }
      }

      if (!result) break;
    }

    return result;
  }
}

// @ts-ignore
const matrix = [
  [0, 1, 2],
  [3, 0, 1],
  [4, 3, 0],
  [5, 4, 3],
];

const matrix1 = [
  [0, 1, 2],
  [3, 0, 7],
  [4, 3, 0],
];

const matrix3 = [
  [0, 1, 2],
  [3, 0, 1],
  [4, 3, 0],
  [5, 5, 3],
];

// console.log(ToeplitzMatrix.solve(matrix));
// console.log(ToeplitzMatrix.solve(matrix1));
console.log(ToeplitzMatrix.solve(matrix3));
