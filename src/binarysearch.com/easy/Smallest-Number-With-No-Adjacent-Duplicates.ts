// https://binarysearch.com/problems/Smallest-Number-With-No-Adjacent-Duplicates

class SmallestNumberWithNoAdjacentDuplicates {
  static solve(s) {
    let result = s.split('');

    result.forEach((c, i) => {
      if (c == '?') {
        for (const d of '123') {
          result[i] = d;

          if (i > 0 && result[i - 1] == result[i]) {
            continue;
          }

          if (i < result.length - 1 && result[i + 1] == result[i]) {
            continue;
          }

          break;
        }
      }
    })


    return result.join('');
  }
}

class SmallestNumberWithNoAdjacentDuplicates1 {
  static solve(s) {
    let res = '';

    for (let i = 0; i < s.length; i++) {
      if (s[i] == '?') {
        const L = i > 0 ? res[i - 1] : '?';
        const R = i < s.length - 1 && s[i + 1] !== '?' ? s[i + 1] : '?';

        res += GRAPH_SOLVE[L][R];
      } else {
        res += s[i];
      }
    }

    return res;
  }
}

const GRAPH_SOLVE = {
  '?': {
    '?': '1',
    '3': '1',
    '2': '1',
    '1': '2'
  },
  '1': {
    '2': '3',
    '1': '2',
    '3': '2',
    '?': '2',
  },
  '2': {
    '2': '1',
    '3': '1',
    '1': '3',
    '?': '1',
  },
  '3': {
    '2': '1',
    '3': '1',
    '1': '2',
    '?': '1'
  }
}

console.log(SmallestNumberWithNoAdjacentDuplicates.solve('?2'));
console.log(SmallestNumberWithNoAdjacentDuplicates.solve('?1'));
console.log(SmallestNumberWithNoAdjacentDuplicates.solve('3?2??'));
console.log(SmallestNumberWithNoAdjacentDuplicates.solve('???'));
