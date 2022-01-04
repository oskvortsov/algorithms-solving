// https://binarysearch.com/problems/Compress-String
class CompressString {
    static solve(s) {
        let prev = '';
        let res = '';

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== prev) {
                prev = s[i];
                res += s[i];
            }
        }

        return res;
    }
}
