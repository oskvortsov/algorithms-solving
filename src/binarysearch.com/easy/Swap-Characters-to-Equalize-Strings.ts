// https://binarysearch.com/problems/Swap-Characters-to-Equalize-Strings
class SwapCharactersToEqualizeStrings {
    static solve(s, t) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            res ^= s.charCodeAt(i) ^ t.charCodeAt(i);
        }

        return res == 0;
    }
}

console.log(SwapCharactersToEqualizeStrings.solve('aa', 'bb'));
