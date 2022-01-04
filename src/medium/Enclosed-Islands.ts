// https://binarysearch.com/problems/Enclosed-Islands

class EnclosedIslands {
    static solve(matrix) {
        let count = 0;
        let matrixOffCount = 0

        let height = matrix.length;
        let width = matrix[0].length;

        if (height < 2 || width < 2) return 0;

        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (i > 0 && j > 0 && i < (height - 1) && j < (width - 1)) {
                    count += matrix[i][j];
                }

                if (i == 0 && matrix[i][j]) {
                    matrixOffCount += matrix[i + 1][j];
                } else if (i == (height - 1) && matrix[i][j]) {
                    matrixOffCount += matrix[i - 1][j];
                }

                if (j == 0 && matrix[i][j]) {
                    matrixOffCount += matrix[i][j + 1];
                } else if (j == (width - 1) && matrix[i][j]) {
                    matrixOffCount += matrix[i][j - 1];
                }
            }
        }

        return Math.max(count - matrixOffCount, 0);
    }
}

console.log(EnclosedIslands.solve([[1]]))
console.log(EnclosedIslands.solve([
    [0,0,0,1],
    [0,1,1,0],
    [0,1,1,0],
    [0,0,0,0]
]), 0)

console.log(EnclosedIslands.solve([
    [0,0,0,1,0],
    [0,1,1,0,1],
    [1,1,1,0,1],
    [0,1,0,0,1]
]), 0)
