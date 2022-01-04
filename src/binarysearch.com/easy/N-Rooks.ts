// https://binarysearch.com/problems/N-Rooks

class NRooks {
    static solve(n) {
        let res = 1;

        while(n) {
            res *= n;
            n--;
        }

        return res;
    }
}
