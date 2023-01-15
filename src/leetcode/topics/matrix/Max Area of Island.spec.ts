// https://leetcode.com/problems/max-area-of-island/

//@ts-ignore
const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]
const DEFAULT_COLOR = 1;
const NEW_COLOR = 2;

function floodFill(matrix: number[][], sr: number, sc: number): number {
    const queue = [[sr, sc]];
    let count = 1;

    matrix[sr][sc] = NEW_COLOR;

    while (queue.length) {
        const [x, y] = queue.shift();

        for(let [dirX, dirY] of DIRECTIONS) {
            const dX = x + dirX;
            const dY = y + dirY;

            if (!isOutOfMatrix(dX, dY, matrix.length, matrix[x].length) && matrix[dX][dY] == DEFAULT_COLOR) {
                count++;
                matrix[dX][dY] = NEW_COLOR;
                queue.push([dX, dY]);
            }
        }
    }

    return count;
}

function isOutOfMatrix(x: number, y: number, xSize: number, ySize: number): boolean {
    return x < 0 || x > xSize - 1 || y < 0 || y > ySize - 1;
}

function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                debugger;
                max = Math.max(
                    floodFill(grid, i, j),
                    max
                )
            }
        }
    }

    return max;
}

describe('Max Area of Island', () => {
  it('case 1', () => {
    expect(
      maxAreaOfIsland([
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ]),
    ).toBe(6);
  });
});
