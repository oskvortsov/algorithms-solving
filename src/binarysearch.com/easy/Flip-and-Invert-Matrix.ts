//https://binarysearch.com/problems/Flip-and-Invert-Matrix
class FlipAndInvertMatrix {
    static solve(matrix) {
        if (!matrix.length || !matrix[0].length) return matrix;

        const size = Math.trunc(matrix[0].length / 2);
        const m = matrix[0].length;

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j <= size; j++) {
                if (j > m - j - 1) break;

                [
                    matrix[i][j],
                    matrix[i][m - 1 - j]
                ] = [
                    matrix[i][m - 1 - j] ? 0 : 1,
                    matrix[i][j] ? 0 : 1
                ];
            }
        }

        return matrix;
    }
}


// console.log(FlipAndInvertMatrix.solve([[1,1,0],[0,0,1],[0,0,0]]));
console.log(FlipAndInvertMatrix.solve([[0, 0]]));
