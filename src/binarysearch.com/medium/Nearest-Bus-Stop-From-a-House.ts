// https://binarysearch.com/problems/Nearest-Bus-Stop-From-a-House


/**
 *
 * We need to find the shortest distance from any source to any target. This is an indicator for multi-source BFS. Our sources are the STOPs and our targets are the HOUSEs (note that we'd get the same result by swapping them).
 *
 * We expand from the source nodes layer by layer. All elements in a layer have the same distance to the source nodes. The first time we discover a target node we know our result. As we have expanded layer by layer we know that all other target nodes will have a distance to any source that is greater or equal to this distance.
 *
 * Implementation
 * Our key data structure is a double ended queue that contains tuples of y, x, distance. Initially we fill this queue with the coordiantes of all bus stops and a distance of 00. We also need a set to store visited empty cells so we can make sure that we won't visit them again.
 *
 * While there are elements in our queue we pop them from the left. That way we ensure that closer nodes are visited before we continue with nodes that are located futher away. When we visit a node we need to check its up to four neighbors. Coordinates that are out of bounds are skipped. If a neighbor node is a HOUSE we return the current distance + 1 as we have found a target. Otherwise we are only interested in EMPTY non-visited neighbor nodes. Those get marked as visited to make sure we won't visit them again. Then we append them at the right end of our queue with the distance increased by 11.
 *
 * If the queue runs empty we return -1−1 because we can't find a path from a STOP to a HOUSE. This indicates that there is either no HOUSE on the map or every path from a STOP to a HOUSE is blocked by WALLs or the border.
 *
 */

const [HOUSE, STOP, EMPTY] = [2, 3, 0];

class NearestBusStopFromAHouse {
    static solve(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;
        const queue = [];
        const visited = initMatrix(m,n, false);

        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix[r].length; c++) {
                if (matrix[r][c] == STOP) queue.push([r, c, 0]);
            }
        }


        while (queue.length) {
            const [r, c, distance] = queue.shift();

            for (let [qr, qc] of DIRECTIONS) {
                let row = r + qr;
                let col = c + qc;

                if (isOutOfMatrix(row, col, m, n)) continue;
                if (matrix[row][col] == HOUSE) return distance + 1;
                if (matrix[row][col] !== EMPTY || visited[row][col]) continue;

                visited[row][col] = true;
                queue.push([row, col, distance + 1]);
            }
        }

        return -1;
    }
}

class NearestBusStopFromAHouse1 {
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
        const path = moves[qr][qc] + 1;

        if (!matrix[row][col]) {
          if (moves[row][col] == Infinity) queue.push([row, col]);
          moves[row][col] = Math.min(path, moves[row][col]);
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

console.log(NearestBusStopFromAHouse.solve([[2, 3]]), 1);

console.log(
  NearestBusStopFromAHouse.solve([
    [0, 0, 0],
    [0, 0, 2],
    [3, 1, 1],
  ]),
  3,
);

console.log(
  NearestBusStopFromAHouse.solve([
    [0, 0, 0],
    [0, 0, 0],
    [3, 0, 2],
  ]),
  2,
);

console.log(
  NearestBusStopFromAHouse.solve([
    [2, 1, 3, 0],
    [1, 1, 1, 1],
    [0, 3, 0, 0],
    [0, 0, 0, 2],
  ]),
  3,
);

console.log(
  NearestBusStopFromAHouse.solve([
    [0, 3, 1],
    [0, 1, 2],
    [0, 0, 0],
  ]),
  6,
);
