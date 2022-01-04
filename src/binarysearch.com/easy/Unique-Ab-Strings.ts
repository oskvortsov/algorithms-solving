// https://binarysearch.com/problems/Unique-Ab-Strings
class UniqueAbStrings {
    static solve(s) {
        return Math.pow(2, s.match(/a/gm).length);
    }
}

console.log(UniqueAbStrings.solve('abba'));
