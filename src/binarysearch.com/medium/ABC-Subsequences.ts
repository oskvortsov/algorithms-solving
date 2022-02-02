//https://binarysearch.com/problems/ABC-Subsequences
class ABCSubsequences {
    static solve(s) {
        let map = {};
        let prev = s[0];
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            if (prev > s[i]) return 0;
            if (prev !== s[i]) {
                map[prev] = count;
                count = 0;
                prev = s[i];
            }

            count++;

            if (i == (s.length - 1)) {
                map[s[i]] = count;
            }
        }

        return Object.values(map).reduce((acc: number, i) => acc * sum(i), 1);
    }
}

const sum = (a) => a > 1 ? a + sum(a - 1) : 1;

console.log(ABCSubsequences.solve('aaabbccc'));
