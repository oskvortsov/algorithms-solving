// https://binarysearch.com/problems/Remove-One-Letter
class RemoveOneLetter {
    static solve(s0, s1) {
        if (s0.length - 1 !== s1.length) {
            return false;
        }

        let diff = 0;

        let i = 0;
        let j = 0;

        while (i < s0.length) {
            if (s0[i++] !== s1[j++]) {
                j--;
                diff++;
            }

            if (diff > 1) return false;
        }

        return true;
    }
}

console.log(RemoveOneLetter.solve("xm", "n"));
console.log(RemoveOneLetter.solve("hello", "helo"));
