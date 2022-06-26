// https://binarysearch.com/problems/Merging-Two-Sorted-Lists
class MergingTwoSortedLists {
    static solve(a, b) {
        let result = [];

        let m = 0;
        let n = 0;

        while (m < a.length || n < b.length) {
            let isA = n == b.length || (m !== a.length && a[m] < b[n]);
            result.push(isA ? a[m++] : b[n++]);
        }


        return result;
    }
}

console.log(MergingTwoSortedLists.solve(
    [5, 10, 15],
    [3, 8, 9]
))
