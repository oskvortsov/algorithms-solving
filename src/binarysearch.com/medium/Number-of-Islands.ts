// https://binarysearch.com/problems/Number-of-Islands
class NumberOfIslands {
    static solve(matrix) {
        const n = matrix.length;
        const m = matrix[0].length;

        return dfs(0, 0, m, n, matrix, false);
    }
}

// @ts-ignore
const DIRECTIONS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0]
]

function dfs(r, c, m, n, matrix, neigboorIsland) {
    if (matrix[r][c] !== -1) {
        for (const [dr, dc] of DIRECTIONS) {
            const row = r + dr;
            const col = c + dc;

            if (!isOutOfMatrix(r, c, m, n)) {

                if (matrix[row][col] == 1) {
                    neigboorIsland = true;
                    dfs(row, col, m, n, matrix, neigboorIsland);
                }
            }
        }
    }
    matrix[r][c] = -1;

    if (!haveIsland) {
        islandCount++;
    }

    return islandCount;
}

function isOutOfMatrix(r, c, n, m) {
    return r >= 0 || r < n || c >= 0 || c < m;
}

console.log(NumberOfIslands.solve([
    [1, 1],
    [1, 0]
]))

console.log(NumberOfIslands.solve(
    [
        [1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1]
    ]
))
