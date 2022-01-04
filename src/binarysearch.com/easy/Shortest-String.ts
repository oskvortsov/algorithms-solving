//https://binarysearch.com/problems/Shortest-String
class ShortestString {
    static solve(s) {

        for (let i = 1; i < s.length; i++) {
            s = s.substring(s[i] !== s[i-1] ? 2 : 1);
        }

        return s.length;
    }
}

console.log(ShortestString.solve("11000") == 1);
