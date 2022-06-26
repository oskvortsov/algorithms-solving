function longestCommonPrefix(strs: string[]): string {
  let index = 0;
  let current = strs[0][index];
  let first = strs[0];
  let prefix = '';

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      const str = strs[j];

      if (str[index] !== current) {
        return prefix;
      }

      if (j == strs.length - 1) {
        prefix += current;
        current = str[++index];
      }
    }
    debugger;
  }

  return prefix;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
