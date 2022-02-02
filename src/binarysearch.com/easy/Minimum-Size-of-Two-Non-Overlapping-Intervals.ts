// https://binarysearch.com/problems/Minimum-Size-of-Two-Non-Overlapping-Intervals
class MinimumSizeOfTwoNonOverlappingIntervals {
    static solve(intervals) {
        intervals = intervals.sort((a, b) => a[1] - b[1]);
        let sums = intervals.map(a => a[1] !== a[0] ? a[1] - a[0] + 1 : 0);


        console.log(intervals, sums);
    }
}

function search(nums, L, R, current) {
    const [start, end] = nums[current];
    
}

console.log(MinimumSizeOfTwoNonOverlappingIntervals.solve([[1,4],[8,9],[3,5]]));
console.log(MinimumSizeOfTwoNonOverlappingIntervals.solve([[1,6],[6,10]]));
console.log(MinimumSizeOfTwoNonOverlappingIntervals.solve([[0,0],[1,3]]));
