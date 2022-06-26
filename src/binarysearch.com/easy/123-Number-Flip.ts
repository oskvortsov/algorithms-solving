// https://binarysearch.com/problems/123-Number-Flip
class OneTwoThreeNumberFlip {
    static solve(n) {
        let ans = String(n);

        for (let i = 0; i < ans.length; i++) {
            if (ans[i] !== '3') {
                ans = ans.substring(0, i) + '3' + ans.substring(i + 1);
                break;
            }
        }

        return Number(ans);
    }
}

console.log(OneTwoThreeNumberFlip.solve(3222));
console.log(OneTwoThreeNumberFlip.solve(123));
