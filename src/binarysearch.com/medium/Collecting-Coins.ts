// https://binarysearch.com/problems/Collecting-Coins
class CollectingCoins {
    static solve(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let up = i > 0 ? matrix[i - 1][j] : 0;
                let left = j > 0 ? matrix[i][j - 1] : 0;

                matrix[i][j] += Math.max(up, left);
            }
        }

        return matrix[m - 1][n - 1];
    }
}

console.log(CollectingCoins.solve([
    [0, 3, 1, 1],
    [2, 0, 0, 4]
]), 9)
