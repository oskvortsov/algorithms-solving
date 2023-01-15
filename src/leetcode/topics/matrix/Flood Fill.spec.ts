// https://leetcode.com/problems/flood-fill/

//@ts-ignore
const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] == color) return image;

    const queue = [[sr, sc]];
    const changeColor = image[sr][sc];

    image[sr][sc] = color;

    while (queue.length) {
        const [x, y] = queue.shift();

        for(let [dirX, dirY] of DIRECTIONS) {
            const dX = x + dirX;
            const dY = y + dirY;

            if (!isOutOfMatrix(dX, dY, image.length, image[x].length) && image[dX][dY] == changeColor) {
                image[dX][dY] = color;
                debugger;
                queue.push([dX, dY]);
            }
        }
    }

    return image;
}

function isOutOfMatrix(x: number, y: number, xSize: number, ySize: number): boolean {
    return x < 0 || x > xSize - 1 || y < 0 || y > ySize - 1;
}

describe('Flood Fill', () => {
    it('case 1', () => {
        expect(
            floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)
        ).toStrictEqual([[2,2,2],[2,2,0],[2,0,1]]);
    })

    it('case 2', () => {
        expect(
            floodFill([[0,0,0],[0,0,0]], 1, 0, 2)
        ).toStrictEqual([[2,2,2],[2,2,2]])
    })
})
