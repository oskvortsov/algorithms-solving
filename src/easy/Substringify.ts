// https://binarysearch.com/problems/Substringify
class Substringify {
    static solve(s: string, t: string) {
        let temp = [t];
        let count = 0;

        while (count !== t.length) {
            if (temp.find(regExp => s.match(`/${regExp}/`))) {
                break;
            }

            count++;
            temp = separator(temp);
        }

        return count;
    }
}

function separator(words: string[]) {
    return words.flatMap(word => [
        word.substr(0, word.length - 1) + `\\w{${word.length}}`,
        word.substr(1)
    ]);
}

console.log(Substringify.solve('foobar', 'oops'))
console.log(Substringify.solve('qa', 'zq'))
console.log(Substringify.solve('qq', 'zq'))
