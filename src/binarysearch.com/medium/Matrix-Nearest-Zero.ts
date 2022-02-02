// https://binarysearch.com/problems/Matrix-Nearest-Zero
class MatrixNearestZero {
    static solve(matrix) {
        const n = matrix.length;
        const m = matrix[0].length;

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c]) {
                    const zero = bfs(matrix, r, c, m, n);

                    if (zero) {
                        distance(zero[0], zero[1], r, c, matrix);
                    }
                }
            }
        }

        return matrix;
    }
}

const DIRECTIONS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

function bfs(matrix, r, c, m, n) {
    const queue = [[r, c]];
    const visited = initVisitedMatrix(n, m);


    while(queue.length) {
        const [qr, qc] = queue.pop();
        visited[qr][qc] = true;

        for (const [dr, dc] of DIRECTIONS) {
            const row = qr + dr;
            const col = qc + dc;

            if (!isOutOfMatrix(row, col, m, n)) {
                if (matrix[row][col] == 0) {
                    return [row, col];
                }

                if (!visited[row][col]) {
                    queue.push([row, col]);
                }
            }
        }
    }

    return null;
}

function distance(dr, dc, r, c, matrix) {
    matrix[r][c] =  Math.abs(dr - r) + Math.abs(dc - c);
}

function initVisitedMatrix(n, m) {
    let visited = new Array(n).fill(null);
    for (const i in visited) visited[i] = new Array(m).fill(false);

    return visited;
}

function isOutOfMatrix(r, c, m, n) {
    return r < 0 || r >= n || c < 0 || c >= m;
}



// class MatrixNearestZeroBrut {
//     static sovle(matrix) {
//         let m = matrix.length;
//         let n = matrix[0].length;
//
//         let ones = [];
//         let zeros = [];
//
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 let obj = {
//                     x: i,
//                     y: j,
//                     val: Infinity
//                 }
//
//                 matrix[i][j] ? ones.push(obj) : zeros.push(obj);
//             }
//         }
//
//         for (let i = 0; i < ones.length; i++) {
//             for (let j = 0; j < zeros.length; j++) {
//                 ones[i].val = Math.min(ones[i].val, Math.abs(ones[i].x - zeros[j].x) + Math.abs(ones[i].y - zeros[j].y));
//             }
//
//             matrix[ones[i].x][ones[i].y] = ones[i].val;
//         }
//
//         return matrix;
//     }
// }

console.log(MatrixNearestZero.solve([[1,1,1],[1,1,0]]));
console.log(MatrixNearestZero.solve([[1,1],[0,1]]));
console.log(MatrixNearestZero.solve([[1,1,1],[1,1,1],[1,0,1]]));
// console.log(MatrixNearestZero.solve([[0],[1],[1]]));
// console.log(MatrixNearestZero.solve([[1,1,1],[1,0,1],[0,0,0]]));
console.log(MatrixNearestZero.solve([[0,1,1]]));
// console.log(MatrixNearestZero.solve([[0]]));
