// https://binarysearch.com/problems/Increasing-Digits
class IncreasingDigits {
    static solve(n) {

    }
}

function count(n) {
    if (n == 1) return 0;


}

function sumWithMemory() {
    let temp = {};

    return function sum(n) {
        if (temp[n]) return temp[n];

        let res = n + sum(n - 1);
        temp[n] = res;

        return  res;
    }
}

