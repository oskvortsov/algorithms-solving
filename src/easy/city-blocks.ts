//https://binarysearch.com/problems/City-Blocks
type Coords = [number, number];

class CityBlocks {
    static solve(matrix: Array<Array<string>>, blocks: Array<string>): number {
        const hashCoords: Record<string, Coords> = {};

        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                hashCoords[matrix[row][col]] = [row, col];
            }
        }

        let distance = 0;

        for (let i = 0; i < blocks.length; i++) {
            distance += this.getDistanceBetweenCoords(
                i == 0 ? [0, 0] : hashCoords[blocks[i - 1]],
                hashCoords[blocks[i]]
            );
        }

        return distance
    }

    static getDistanceBetweenCoords(one: Coords, two: Coords) {
        return Math.abs(one[0] - two[0]) + Math.abs(one[1] - two[1]);
    }
}


// const matrix = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h", "i"]
// ];
// const blocks = ["h", "b", "c"];

const matrix = [["a","b","c","d","e","f","g"]];
const blocks = ["a","c","f"];

console.log(CityBlocks.solve(matrix, blocks) === 5);
