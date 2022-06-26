// https://binarysearch.com/problems/Interleaved-String

class InterleavedString {
    static solve(s0, s1) {
        let result = '';

        let m = 0;
        let n = 0;

        while (m < s0.length || n < s1.length) {
            let isA = n == s1.length || (m !== s0.length && m <= n);
            result += isA ? s0[m++] : s1[n++];
        }


        return result;
    }
}

console.log(InterleavedString.solve('abc', 'xyz'));
console.log(InterleavedString.solve('abc', 'x'));
