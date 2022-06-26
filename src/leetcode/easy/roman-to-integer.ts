const ROMAN_TO_NUMBER = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
};

function romanToInt(s: string): number {
    let result = 0;
    let index = 0;

    while (index <= s.length) {
        let [first, second] = [s[index], s[index + 1]];

        if (first + second in ROMAN_TO_NUMBER) {
            result += ROMAN_TO_NUMBER[first + second];
            index += 2;
        } else {
            result += ROMAN_TO_NUMBER[first] || 0;
            index++;
        }
    }

    return result;
}

console.log(romanToInt('MCMXCIV'), 1994);
console.log(romanToInt('LVIII'), 58);
console.log(romanToInt('III'), 3);
