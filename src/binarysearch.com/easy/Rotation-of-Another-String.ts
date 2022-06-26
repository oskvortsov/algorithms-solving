// https://binarysearch.com/problems/Rotation-of-Another-Stringе

// need tesolve by KMP

class RotationOfAnotherString {
    static solve(s0: string, s1: string) {
        return s0.length === s1.length && (s0 + s0).includes(s1);
    }
}

console.log(RotationOfAnotherString.solve('smqubnm', 'mqmsubn'))
console.log(RotationOfAnotherString.solve('Hogwarts', 'artsHogw'));
console.log(RotationOfAnotherString.solve('Cattywampus', 'sCattywampu'));
console.log(RotationOfAnotherString.solve('abcde', 'edcba'))
console.log(RotationOfAnotherString.solve('Apple', 'ppleA'));
console.log(RotationOfAnotherString.solve('uznkazlhidbwgu', 'bwguuznkazlhid'));
console.log(RotationOfAnotherString.solve('ccegbbypcdqaggebeanan', 'anccegbbypcdqaggebean'));
console.log(RotationOfAnotherString.solve('wwopdsrawspxsxqtwfgfqhaeoqzbuufmfjymmyuscaiscmjw', 'jwwwopdsrawspxsxqtwfgfqhaeoqzbuufmfjymmyuscaiscm'));
console.log(RotationOfAnotherString.solve('wunozznypkcuxzxttxsweacgtzopzagecrjumhujcqbcbepdxgmjikjljunstxqwedudaymenpcjatznfvkkjcvghlofcbnyqfbcgedluasiwu', 'unozznypkcuxzxttxsweacgtzopzagecrjumhujcqbcbepdxgmjikjljunstxqwedudaymenpcjatznfvkkjcvghlofcbnyqfbcgedluasiwuw'));
