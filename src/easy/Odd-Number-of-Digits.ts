//https://binarysearch.com/problems/Odd-Number-of-Digits
class OddNumberOfDigits {
    static solve(nums: Array<number>): number {
        return nums.filter(num => (Math.log10(num) + 1) & 1).length;
    }
}
