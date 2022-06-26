// https://binarysearch.com/problems/Collatz-Sequence
class CollatzSequence {
    static solve(n) {
        let count = 1;

        while (n !== 1) {
            debugger;
            n = n % 2 ? n * 3 + 1 : n / 2;
            count++;
        }

        return count;
    }
}

console.log(CollatzSequence.solve(11));
