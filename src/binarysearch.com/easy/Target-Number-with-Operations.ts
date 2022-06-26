// https://binarysearch.com/problems/Target-Number-with-Operations

class TargetNumberWithOperations {
    static solve(start, end) {
        let count = 0;

        while (end > start) {
            let restDivTwo = end % 2;

            if (restDivTwo || end / 2 < start) {
                end--;
            } else {
                end = end / 2;
            }
            count++;
        }

        console.log(end, start);
        return count;
    }
}


// console.log(TargetNumberWithOperations.solve(4, 10));
// console.log(TargetNumberWithOperations.solve(2, 9));
console.log(TargetNumberWithOperations.solve(413, 17396223));
