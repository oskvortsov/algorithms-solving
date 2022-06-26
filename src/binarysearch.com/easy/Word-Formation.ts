// https://binarysearch.com/problems/Word-Formation
class WordFormation {
  static solve(words, letters) {
    let dictionary = new Map();
    let max = 0;

    for (let letter of letters) {
        dictionary.set(letter, (dictionary.get(letter) || 0) + 1);
    }

    for (let word of words) {
        let flag = false;
        let temp = {};

        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            flag = true;

            if (!dictionary.has(letter) || temp[letter] == dictionary.get(letter)) {
                flag = false;
                break;
            }

            temp[letter] = (temp[letter] || 0) + 1;
        }

        if (flag) {
            max = Math.max(max, word.length);
        }
    }

    return max;
  }
}

console.log(
  WordFormation.solve(
    ['the', 'word', 'love', 'scott', 'finder', 'dictionary'],
    'fanierdow',
  ),
);

console.log(
  WordFormation.solve(
    ['credit', 'nirvana', 'karma', 'empathy', 'hang', 'aaaaaaaaa'],
    'afnfkmar',
  ),
);
