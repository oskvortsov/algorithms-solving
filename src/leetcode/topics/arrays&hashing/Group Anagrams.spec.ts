// https://leetcode.com/problems/group-anagrams/

// this require much more space and time. it's good for long word but for short sort alpha much better
function getKey2(word: string): string {
    let counts = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    for (let i = 0; i < word.length; i++) {
        counts[word.charCodeAt(i) - aCharCode]++;
    }

    return counts.join('#');
}

function getKey(word: string): string {
  return word.split('').sort().join('');
}

function groupAnagrams(strs: string[]): string[][] {
  let map = new Map();

  for (let word of strs) {
    let key = getKey(word);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(word);
  }

  return [...map.values()];
}

describe('Group Anagrams', () => {
  it('case 1', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];

    expect(groupAnagrams(input)).toStrictEqual(output);
  });
});
