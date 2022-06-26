// https://binarysearch.com/problems/Maximize-Binary-String-Score
class MaximizeBinaryStringScore {
    static solve(s) {
        const zeros = new Array(s.length).fill(0);
        const ones = new Array(s.length).fill(0);

        for (let i = 0; i < s.length; i++) {
            zeros[i] = (zeros[i - 1] || 0) + (s[i] === '0' ? 1 : 0);
            ones[s.length -1 - i] = (ones[s.length - i] || 0) + (s[s.length -1 - i] === '1' ? 1 : 0);
        }

        let max = 0;

        for (let i = 1; i < zeros.length; i++) {
            max = Math.max(zeros[i - 1] + ones[i], max);
        }

        return max;
    }
}

console.log(MaximizeBinaryStringScore.solve("001001110111"));
