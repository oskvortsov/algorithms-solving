// https://binarysearch.com/problems/Rotation-of-Another-String
class RotationOfAnotherString {
    static solve(s0: string, s1: string) {
        if (s0.length !== s1.length) return false;
        if (s1 == s0) return true;

        let pattern = s0;
        let j = 0;
        let maxLen = 0;
        let start = 0;

        for (let i = 0; i < s1.length; i++) {
            while (pattern[j] == s1[i + j]) {
                j++;
            }

            if (j > 1) {
                start = i;
                maxLen = j;
            }

            j = 0;
        }


        let temp = s1.substr(start, start + maxLen) + s1.substr(0, start);
        console.log(start, maxLen, temp);
        return temp == pattern;
    }
}

// console.log(RotationOfAnotherString.solve('smqubnm', 'mqmsubn'))
// console.log(RotationOfAnotherString.solve('Hogwarts', 'artsHogw'));
// console.log(RotationOfAnotherString.solve('Cattywampus', 'sCattywampu'));
// console.log(RotationOfAnotherString.solve('abcde', 'edcba'))
console.log(RotationOfAnotherString.solve('Apple', 'ppleA'));
// console.log(RotationOfAnotherString.solve('uznkazlhidbwgu', 'bwguuznkazlhid'));
// console.log(RotationOfAnotherString.solve('ccegbbypcdqaggebeanan', 'anccegbbypcdqaggebean'));
console.log(RotationOfAnotherString.solve('wwopdsrawspxsxqtwfgfqhaeoqzbuufmfjymmyuscaiscmjw', 'jwwwopdsrawspxsxqtwfgfqhaeoqzbuufmfjymmyuscaiscm'));
console.log(RotationOfAnotherString.solve('wunozznypkcuxzxttxsweacgtzopzagecrjumhujcqbcbepdxgmjikjljunstxqwedudaymenpcjatznfvkkjcvghlofcbnyqfbcgedluasiwu', 'unozznypkcuxzxttxsweacgtzopzagecrjumhujcqbcbepdxgmjikjljunstxqwedudaymenpcjatznfvkkjcvghlofcbnyqfbcgedluasiwuw'));
