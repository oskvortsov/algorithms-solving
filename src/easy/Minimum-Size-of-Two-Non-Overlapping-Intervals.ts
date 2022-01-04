// https://binarysearch.com/problems/Minimum-Size-of-Two-Non-Overlapping-Intervals
class MinimumSizeOfTwoNonOverlappingIntervals {
    static solve(intervals) {
        intervals = intervals.sort((a, b) => a[0] - b[0]);

        let nonOverlapIntervals = [];
        for (let i = 1; i < intervals.length; i++) {
            let prevSize = intervals[i - 1][1] - intervals[i - 1][0];
            let curSize = intervals[i][1] - intervals[i][0];

            if (intervals[i - 1][1] >= intervals[i][0]) {
                nonOverlapIntervals.push(prevSize < curSize ? intervals[i - 1] : intervals[i]);
            } else {
                if (i - 1 == 0) nonOverlapIntervals.push(intervals[i - 1]);
                nonOverlapIntervals.push(intervals[i]);
            }
        }


        return nonOverlapIntervals.length > 1 ? nonOverlapIntervals.reduce((acc, [start, end]) => {
            acc += end - start + 1;

            return acc;
        }, 0) : 0;
    }
}

console.log(MinimumSizeOfTwoNonOverlappingIntervals.solve([[1,4],[8,9],[3,5]]));
console.log(MinimumSizeOfTwoNonOverlappingIntervals.solve([[1,6],[6,10]]));
console.log(MinimumSizeOfTwoNonOverlappingIntervals.solve([[0,0],[1,3]]));
