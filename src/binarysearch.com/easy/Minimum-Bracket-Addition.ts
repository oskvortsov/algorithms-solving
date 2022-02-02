// https://binarysearch.com/problems/Minimum-Bracket-Addition
class MinimumBracketAddition {
    static solve(s) {
        const brackets = [];
        let count = 0;
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] == '(' && count < 1) {
                res++;
            }

            count += 1;
        }

        return count;
    }
}

console.log(MinimumBracketAddition.solve('((())'), 1);
console.log(MinimumBracketAddition.solve(')))(('), 5);
console.log(MinimumBracketAddition.solve('(()())'), 0);
