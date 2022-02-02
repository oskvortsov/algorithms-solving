// https://binarysearch.com/problems/Nearest-Bus-Stop-From-a-House
class NearestBusStopFromAHouse {
  static solve(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const moves = initMatrix(m, n, Infinity);
    let min = Infinity;
    const thirds = [];

    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (matrix[r][c] == 2) {
          moves[r][c] = 0;
          bfs(matrix, r, c, m, n, moves)
        }

        if (matrix[r][c] == 3) {
          thirds.push([r, c]);
        }
      }
    }

    thirds.forEach(([r, c]) => {
      min = Math.min(getMinWay(r,c, moves), min);
    })

    return min == Infinity ? -1 : min;
  }
}

function initMatrix(m, n, initVal) {
  return new Array(m).fill(null).map(() => new Array(n).fill(initVal));
}

// @ts-ignore
const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function bfs(matrix, r, c, m, n, moves) {
  const queue = [[r, c]];

  while (queue.length) {
    const [qr, qc] = queue.pop();

    for (const [dr, dc] of DIRECTIONS) {
      const row = qr + dr;
      const col = qc + dc;

      if (!isOutOfMatrix(row, col, m, n)) {
        const path = getMinWay(row, col, moves);

        if (!matrix[row][col]) {
          if (moves[row][col] == Infinity) {
            queue.push([row, col]);
          }

          moves[row][col] = path;
        }
      }
    }
  }
}

function getMinWay(r, c, moves) {
  let min = Infinity;

  for (const [dr, dc] of DIRECTIONS) {
    let val = (moves[r + dr] && moves[r + dr][c + dc]) + 1;
    if (!isNaN(val)) min = Math.min(min, val);
  }

  return min;
}

function isOutOfMatrix(r, c, m, n) {
  return r < 0 || r >= m || c < 0 || c >= n;
}

// let bigMarrix = new Array(250).fill(null);
// bigMarrix = bigMarrix.map(() => {
//   let val = Math.trunc(Math.random() * 4);
//   return new Array(250).fill(val);
// })

// console.time('bigMarrix')
// console.log(
//     NearestBusStopFromAHouse.solve(bigMarrix)
// )
// console.timeEnd('bigMarrix');

console.log(
  NearestBusStopFromAHouse.solve([
    [2, 2, 2],
    [1, 0, 0],
    [1, 0, 3],
    [1, 3, 0],
  ]),
  2,
);
//
console.log(NearestBusStopFromAHouse.solve([
    [3, 1],
    [1, 2]
]), -1)

console.log(NearestBusStopFromAHouse.solve([
  [0, 0, 0, 0],
  [0, 1, 0, 2],
  [0, 0, 2, 0],
  [3, 3, 0, 1]
]), 2)
//
// console.log(NearestBusStopFromAHouse.solve([[2, 3]]), 1);
//
// console.log(
//   NearestBusStopFromAHouse.solve([
//     [0, 0, 0],
//     [0, 0, 2],
//     [3, 1, 1],
//   ]),
//   3,
// );
//
// console.log(
//   NearestBusStopFromAHouse.solve([
//     [0, 0, 0],
//     [0, 0, 0],
//     [3, 0, 2],
//   ]),
//   2,
// );
//
// console.log(
//   NearestBusStopFromAHouse.solve([
//     [2, 1, 3, 0],
//     [1, 1, 1, 1],
//     [0, 3, 0, 0],
//     [0, 0, 0, 2],
//   ]),
//   3,
// );
//
// console.log(
//   NearestBusStopFromAHouse.solve([
//     [0, 3, 1],
//     [0, 1, 2],
//     [0, 0, 0],
//   ]),
//   6,
// );
