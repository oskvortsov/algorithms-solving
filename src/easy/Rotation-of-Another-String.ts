// https://binarysearch.com/problems/Rotation-of-Another-String
class RotationOfAnotherString {
    static solve(s0: string, s1: string) {
        if (s0.length !== s1.length) return false;

        let temp = s1;

        for (let i = 0; i < s1.length; i++) {
            temp = s1[s1.length - (i + 1)] + temp;
            if (temp[0] == s0[0] && temp[s0.length - 1] == s0[s0.length - 1] && temp.includes(s0)) {
                return true;
            }
        }

        return false;
    }
}

console.log(RotationOfAnotherString.solve('smqubnm', 'mqmsubn'))
console.log(RotationOfAnotherString.solve('Hogwarts', 'artsHogw'));
// console.log(RotationOfAnotherString.solve('Cattywampus', 'sCattywampu'));
// console.log(RotationOfAnotherString.solve('abcde', 'edcba'))
// console.log(RotationOfAnotherString.solve('Apple', 'ppleA'));
// console.log(RotationOfAnotherString.solve('uznkazlhidbwgu', 'bwguuznkazlhid'));
// console.log(RotationOfAnotherString.solve('ccegbbypcdqaggebeanan', 'anccegbbypcdqaggebean'));
