// https://binarysearch.com/problems/Paint-Bucket
import { log } from 'util';


class PaintBucket {
    static solve(matrix, r, c, target) {
        const color = matrix[r][c];
        const m = matrix.length;
        const n = matrix[0].length;

        if (isOutOfMatrix(r, c, m, n) || matrix[r][c] == target) return matrix;

        dfs(matrix, r, c, m, n, target, color);
        // bfs(matrix, r, c, m, n, target, color);


        return matrix;
    }
}

const DIRECTIONS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

function dfs(matrix, r, c, m, n, target, color) {
    if (isOutOfMatrix(r, c, m, n) || matrix[r][c] !== color || matrix[r][c] == target) {
        return;
    }

    matrix[r][c] = target;

    for (const [dr, dc] of DIRECTIONS) {
        dfs(matrix, r + dr, c + dc, m, n, target, color);
    }
}

function bfs(matrix, r, c, m, n, target, color) {
    const queue = [[r, c]];

    matrix[r][c] = target;

    while(queue.length) {
        const [qr, qc] = queue.pop();

        for (const [dr, dc] of DIRECTIONS) {
            const row = qr + dr;
            const col = qc + dc;

            if (isOutOfMatrix(row, col, m, n) || matrix[row][col] !== color || matrix[row][col] == target) {
                continue;
            }

            matrix[row][col] = target;
            queue.push([row, col]);
        }
    }
}

function isOutOfMatrix(r, c, m, n) {
    return r < 0 || r >= m || c < 0 || c >= n;
}


// console.log(PaintBucket.solve([['r']], 0, 0, 'g'));
// console.log(PaintBucket.solve([["r","r","b","b","g","g"]], 0, 5, 'b'));
// console.log(
//   PaintBucket.solve(
//     [
//       ['r', 'r', 'r'],
//       ['r', 'g', 'b'],
//       ['g', 'b', 'b'],
//     ],
//     0,
//     0,
//     'g',
//   ),
// );
console.log(
  PaintBucket.solve(
    [
      ['g', 'r', 'r', 'g'],
      ['b', 'r', 'r', 'b'],
    ],
    0,
    1,
    'g',
  ),
);
