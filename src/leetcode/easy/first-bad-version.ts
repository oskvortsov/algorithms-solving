/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let L = 0, R = n;

        while (L < R) {
            let mid = L + Math.floor((R - L) / 2);

            if (isBadVersion(mid)) {
                R = mid;
            } else {
                L = mid + 1;
            }
        }

        return L;
    };
};

const isBadVersion = n => n >= 3;

console.log(solution(isBadVersion)(5));
