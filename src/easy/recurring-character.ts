//https://binarysearch.com/problems/Recurring-Character
class RecurringCharacter {
  static solve(s: string): number {
    const hash = new Set();

    for (let i = 0; i < s.length; i++) {
      if (hash.has(s[i])) {
        return i;
      }

      hash.add(s[i]);
    }

    return -1;
  }
}

console.log(RecurringCharacter.solve('abcda'));
