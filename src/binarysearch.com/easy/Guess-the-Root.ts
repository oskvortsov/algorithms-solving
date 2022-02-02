//https://binarysearch.com/problems/Guess-the-Root
class GuessTheRoot {
    static solve(n) {
        return bs(0, n, n);
    }
}

function bs(L, R, target) {
    while (L < R) {
        let mid = ;
        let quad = mid ** 2;

        if (quad == target) return mid;

        if (quad <= target) {
            L = mid + 1;
        } else {
            R = mid - 1;
        }
    }

    return R;
}

function bs1(L, R, target) {
    let res = target;
    let prevDiff = target;

    while (L < R) {
        let mid = L + (Math.floor((R - L)/ 2));
        // let mid = L + ((R - L) >> 1);

        let dif = target - mid ** 2;

        if (dif >= 0 && dif < prevDiff) {
            prevDiff = dif;
            res = mid;
        }

        if (mid ** 2 < target) {
            L = mid + 1;
        } else {
            R = mid;
        }
    }

    return res;
}

console.log(GuessTheRoot.solve(9));
console.log(GuessTheRoot.solve(26));
console.log(GuessTheRoot.solve(46510552));
