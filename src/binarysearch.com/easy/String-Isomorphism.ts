// https://binarysearch.com/problems/String-Isomorphism
class StringIsomorphism {
    static solve(s, t) {
        let result = '';
        let dict = new Map();

        for (let i = 0; i < s.length; i++) {
            !dict.has(t[i]) && dict.set(t[i], s[i])
            let char = dict.get(t[i]);
            result += char;
        }

        return result == s;
    }
}

console.log(StringIsomorphism.solve("coco", "kaka"));
console.log(StringIsomorphism.solve("cat", "foo"));
