// https://binarysearch.com/problems/Run-Length-Encoding

class RunLengthEncoding {
  static solve(s) {
      let res = '';
      let count = 0;
      let prev = '';

      for (let i = 0; i < s.length; i++) {
          if (prev == s[i]) {
              count++;
          } else {
              if (count) {
                  res += count + prev;
              }

              prev = s[i];
              count = 1;
          }
      }

      if (count)  res += count + prev;

      return res;
  }
}

console.log(RunLengthEncoding.solve('aaaabbbccdaa') == "4a3b2c1d2a");
