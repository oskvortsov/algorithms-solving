// https://binarysearch.com/problems/Narcissistic-Number
class NarcissisticNumber {
    static solve(n) {
        let s = String(n);
        let pow = s.length;

        let ans = 0;

        for (let i = 0; i < pow; i++) {
            ans += Math.pow(+s[i], pow);
        }

        return ans == n;
    }
}

console.log(NarcissisticNumber.solve(153));
