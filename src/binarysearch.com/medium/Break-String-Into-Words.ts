// https://binarysearch.com/problems/Break-String-Into-Words
class BreakStringIntoWords1 {
    static solve(words, s: string) {
        let dp = new Array(s.length + 1).fill(0);
        dp[0] = 1;

        for (let i = 0; i < s.length; i++) {
            if (dp[i]) {
                for (let word of words) {
                    if (s.startsWith(word, i)) {
                        dp[i + word.length] = 1;
                    }
                }
            }
        }

        return !!dp[s.length];
    }
}



class BreakStringIntoWords {
    static solve(words, s: string) {
        return checkRest(words, s, 0);
    }
}

function checkRest(words, s, startPosition) {
    let foundWords = searchWords(words, s, startPosition).sort((a, b) => a.length - b.length);

    if (foundWords.some(w => s.length == startPosition + w.length)) {
        return true;
    }

    foundWords = foundWords.filter(w => searchWords(words, s, startPosition + w.length).length);

    if (foundWords.length) {
        return checkRest(words, s, startPosition + foundWords.pop().length);
    }

    return false;
}

function searchWords(words, s, startPosition) {
    return words.filter(w => s.startsWith(w, startPosition));
}

console.log(BreakStringIntoWords1.solve(["quick", "brown", "the", "fox"], "thequickbrownfox"))
console.log(BreakStringIntoWords1.solve(["hello","foob","world","foo","bar"], "hellofoobarworld"))
console.log(BreakStringIntoWords1.solve(["aaaaaa","aaaa","aa"], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
