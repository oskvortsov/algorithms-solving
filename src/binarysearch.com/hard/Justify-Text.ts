// https://binarysearch.com/problems/Justify-Text
class JustifyText {
    static solve(words, k) {
        let result = [];
        let lines = [];
        let currentSize = 0;
        let currPads = 0;

        for (let word of words) {
            if (currentSize + currPads + word.length <= k) {
                lines.push(word);
                currentSize += word.length;
                currPads++;
            } else {
                result.push(addLine(lines, k, currentSize + currPads));
                lines = [word];
                currentSize = word.length;
                currPads = 1;
            }
        }

        if (lines.length) result.push(addLine(lines, k, currentSize + currPads));

        return result;
    }
}

function addLine(words, k, wordSize) {
    while (wordSize <= k) {
        let last = words.length == 1 ? words.length - 1 : words.length - 2;

        for (let i = 0; i <= last; i++) {
            if (wordSize <= k) {
                words[i] += ' ';
                wordSize++;
            } else break;
        }
    }

    return words.join(' ');
}

console.log(JustifyText.solve(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16));
console.log(JustifyText.solve(["abc","de","fg","bfq","fdgre"], 5));
