// https://binarysearch.com/problems/Matrix-Search
class MatrixSearch {
    static solve(matrix, k) {
        let smallest = Infinity;

        for (let row of matrix) {
            smallest = Math.min(search(row, k));
        }

        return smallest;
    }
}

function search(arr, target) {
    let L = 0;
    let R = arr.length - 1;

    while (L < R) {
        let mid = Math.trunc((L + R) / 2);

        if (arr[mid] < target) {
            L++;
        } else {
            R--;
        }
    }

    if (arr[R] == target && arr[R] < arr[R+1]) {
        R++;
    }

    return arr[R];
}


console.log(MatrixSearch.solve(
    [
        [1, 3, 30],
        [2, 3, 31],
        [5, 5, 32]
    ],
    4
))
