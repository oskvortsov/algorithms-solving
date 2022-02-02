// https://binarysearch.com/problems/Substringify
class Substringify {
    static solve(s: string, t: string) {
       if (!s || !t) return 0;

       let temp = 0;
       let size = [];

       for (let i = 0; i < s.length - (t.length - 1); i++) {
           for (let j = 0; j < t.length; j++) {
               if (s[i + j] == t[j]) temp++;
           }
           size.push(temp);
           temp = 0;
       }

       return t.length - Math.max(...size, 0);
    }
}

function separator(words: string[]) {
    return words.flatMap(word => [
        word.substr(0, word.length - 1) + `\\w{${word.length}}`,
        word.substr(1)
    ]);
}

console.log(Substringify.solve('zk', 'kq') == 2)
console.log(Substringify.solve('qa', 'zq') == 2)
console.log(Substringify.solve('qq', 'zq') == 1)
console.log(Substringify.solve('foobar', 'oops') == 2)
