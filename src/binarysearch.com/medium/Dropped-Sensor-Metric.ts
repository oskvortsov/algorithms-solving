// https://binarysearch.com/problems/Dropped-Sensor-Metric

/**
 * We know that all pairs of numbers up to a certain index tt must be equal, so a[i] = b[i]a[i]=b[i] for i < ti<t.
 * We also know that the numbers in each array are unique and one array is the copy of the other one with the element at index tt removed,
 * so a[i] \neq b[i]a[i]
 * 
 * =b[i] for all t \leq i < nt≤i<n. The clear separation into a group of equal and a group of unequal pairs makes it possible to binary search for tt.
 *
 * After we have found tt we need to detect the missing number.
 * For this we need to look at the number at index t + 1t+1: If a[t + 1] = b[t]a[t+1]=b[t] then we know that a[t]a[t] is missing as it has been removed
 * from bb. Otherwise it must be b[t]b[t].
 *
 * Implementation
 * Implementation wise we are left with a pretty standard binary search implementation whereby we use
 * the predicate a[mid] == b[mid]. If this condition is true we know that tt must be higher than mid, otherwise it is lower or equal to it.
 */

class DroppedSensorMetric {
    static solve(a, b) {
        let L = 0;
        let R = a.length - 1;

        while (L < R) {
            let mid = Math.trunc((L + R) / 2);

            if (a[mid] == b[mid]) {
                L = mid + 1;
            } else {
                R = mid;
            }
        }

        return a[L + 1] == b[R] ? a[L] : b[R];

    }
}

class DroppedSensorMetric1 {
    static solve(a, b) {
        let last = a.length - 1;
        let faulty = a;
        let correct = b;

        if (a[last] !== b[last - 1]) {
            faulty = b;
            correct = a;
        }

        for (let i = a.length - 1; i > -1; i--) {
            if (faulty[i] !== correct[i - 1]) return faulty[i];
        }

        return -1;
    }
}

console.log(DroppedSensorMetric.solve(
    [1, 2, 3],
    [2, 3, 5]
), 1);

console.log(DroppedSensorMetric.solve(
    [5, 4, 2, 1, 6],
    [5, 4, 3, 2, 1]
), 3);
