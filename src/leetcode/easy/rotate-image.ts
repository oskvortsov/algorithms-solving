function rotate(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - 1 - i; j++) {
            replace(i, j, n - 1, matrix);
        }
    }

}

function replace(i, j, n, arr) {
    let temp = arr[i][j];

    arr[i][j] = arr[n - j][i];
    arr[n - j][i] = arr[n - i][n - j];
    arr[n - i][n - j] = arr[j][n - i];
    arr[j][n - i] = temp;
}

// @ts-ignore
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]];

rotate(matrix1);
console.log(matrix1);
