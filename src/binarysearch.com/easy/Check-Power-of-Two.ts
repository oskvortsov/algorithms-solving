// https://binarysearch.com/problems/Check-Power-of-Two

// n = 16 = 0b10000
// n - 1 = 15 = 0b1111

class CheckPowerOfTwo {
    static solve(n) {
        return n && !(n & n -1);
    }
}


// use Math.log2(n) % 1

class CheckPowerOfTwo2 {
    static solve(n) {
        return Math.log2(n) % 1 == 0;
    }
}

class CheckPowerOfTwo1 {
    static solve(n) {
        let res = 0;

        while(n || res > 1) {
            res += 1 & n;
            n >>= 1;
        }

        return res == 1;
    }
}

console.log(CheckPowerOfTwo.solve(0), false);
console.log(CheckPowerOfTwo.solve(2), true);
console.log(CheckPowerOfTwo.solve(4), true);
