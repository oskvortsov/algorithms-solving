// https://binarysearch.com/problems/Number-of-Bits
class NumberOfBits {
    static solve(n) {
        let count = 0;
        let bitMask = 1;

        while (bitMask <= n) {
            if (n & bitMask) count++;
            bitMask <<= 1;
        }

        return count;
    }
}

console.log(NumberOfBits.solve(16 ));
