// https://binarysearch.com/problems/Find-Local-Peaks
class FindLocalPeaks {
    static solve(nums) {
        let peaks = [];

        for (let i = 0; i < nums.length; i++) {
            if (i == 0 && nums[i] > nums[i + 1]
                || i == (nums.length - 1) && nums[i - 1] < nums[i]
                || nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
                peaks.push(i);
            }
        }

        return peaks;
    }
}
