// https://binarysearch.com/problems/Matrix-Prefix-Sum
class MatrixPrefixSum {
    static solve(matrix) {
        let dp = new Array(matrix.length);
        for (let i = 0; i < dp.length; i++) dp[i] = new Array(matrix[i].length).fill(0);

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                let prevI = i - 1;
                let prevJ = j - 1;

                dp[i][j] = matrix[i][j];

                if (prevI > -1) {
                    dp[i][j] += matrix[prevI][j];
                }

                if (prevJ > -1) {
                    dp[i][j] += matrix[i][prevJ];
                }
            }
        }

        return dp;
    }
}

console.log(
    MatrixPrefixSum.solve([
        [2, 3],
        [5, 7]
    ])
)
