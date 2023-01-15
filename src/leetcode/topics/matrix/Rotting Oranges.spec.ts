// https://leetcode.com/problems/rotting-oranges/?envType=study-plan&id=algorithm-i

//@ts-ignore
const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

const ROTTEN = 2;
const FRESH = 1;

function rootOrange(box: number[][], queue: number[][]): number {
    let buffer = [];
    let minutes = 0;

    while (queue.length || buffer.length) {
        const [x, y] = queue.shift();

        for(let [dirX, dirY] of DIRECTIONS) {
            const dX = x + dirX;
            const dY = y + dirY;

            if (!isOutOfMatrix(dX, dY, box.length, box[x].length) && box[dX][dY] == FRESH) {
                box[dX][dY] = ROTTEN;
                buffer.push([dX, dY]);
            }
        }

        if (queue.length == 0 && buffer.length) {
            queue.push(...buffer);
            buffer = [];
            minutes++;
        }
    }

    return minutes;
}

function isOutOfMatrix(x: number, y: number, xSize: number, ySize: number): boolean {
    return x < 0 || x > xSize - 1 || y < 0 || y > ySize - 1;
}

function orangesRotting(grid: number[][]): number {
    let queue = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == ROTTEN) {
                queue.push([i, j]);
            }
        }
    }

    let min = rootOrange(grid, queue);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == FRESH) {
                return -1;
            }
        }
    }

    return min;
}

describe('Rotting Oranges', () => {
    it('case 1', () => {
        expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toBe(4);
    })

    it ('case 2', () => {
        expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toBe(-1);
    })

    it ('case 3', () => {
        expect(orangesRotting([[1],[2]])).toBe(1);
    })

    it ('case 4', () => {
        expect(orangesRotting([[2,1,1],[1,1,1],[0,1,2]])).toBe(2);
    })
})
