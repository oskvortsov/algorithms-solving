// https://binarysearch.com/problems/Consecutive-Duplicates
class ConsecutiveDuplicates {
    static solve(s) {
        if (!s) return '';

        let prev = s[0];
        let res = s[0];

        for (let i = 1; i < s.length; i++) {
            if (prev !== s[i]) {
                prev = s[i];
                res += s[i];
            }
        }

        return res;
    }
}

console.log(ConsecutiveDuplicates.solve("YYYXYXX"));
