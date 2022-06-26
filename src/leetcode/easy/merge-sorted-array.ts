/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let end1 = m - 1, end2 = n - 1;

    while(end1 > -1 || end2 > -1) {
        nums1[end1 + end2 + 1] = end2 < 0 || end1 >=0 && nums1[end1] > nums2[end2] ? nums1[end1--] : nums2[end2--];
    }
}

const numsA = [1, 2, 3, 0, 0, 0];
const numsB = [2, 5, 6];

merge(numsA, 3, numsB, 3);
console.log(numsA);

// const numsA = [0];
// const numsB = [1];
//
// merge(numsA, 0, numsB, 1);
// console.log(numsA);
