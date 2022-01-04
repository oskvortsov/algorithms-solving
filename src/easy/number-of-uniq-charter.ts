//https://binarysearch.com/problems/Number-of-Unique-Character-Substrings
// class NumberOfUniqCharter {
//   static solve(s: string): number {
//     let result = 0;
//     let power = 1;
//
//     for (let i = 1; i < s.length; i++) {
//       if (s[i - 1] == s[i]) {
//         power++;
//       } else {
//         result += power > 1 ? this.getCombination(power) : 1;
//         power = 1;
//       }
//     }
//
//     if (power) result += this.getCombination(power);
//
//     return result;
//   }
//
//   static getCombination(num) {
//     return ((1 + num) * num) / 2;
//   }
// }


// class NumberOfUniqCharter {
//   static solve(s: string): number {
//     let result = 0;
//     let power = 1;
//
//     for (let i = 1; i < s.length; i++) {
//       if (s[i - 1] == s[i]) power++;
//
//       if (s[i - 1] !== s[i]) {
//         result += ((1 + power) * power) / 2;
//         power = 1;
//       }
//     }
//
//     if (power) result += ((1 + power) * power) / 2;
//
//     return result;
//   }
// }

class NumberOfUniqCharter {
  static solve(s: string): number {
    let result = 0;
    let last = 'last';
    let temp = 0;

    for (let i = 0; i < s.length; i++) {
        temp = last === s[i] ? temp + 1 : 0;
        last = s[i];
        result += temp + 1;
    }

    return result;
  }
}

console.log(NumberOfUniqCharter.solve('aaa') == 6);
console.log(NumberOfUniqCharter.solve('aaaa') == 10);
console.log(NumberOfUniqCharter.solve('aab') == 4);
console.log(NumberOfUniqCharter.solve('f') == 1);
