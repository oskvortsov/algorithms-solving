// https://binarysearch.com/problems/Palindromic-Integer

class PalidromicInteger1 {
  static solve(num) {
    let reverseNum = Number(String(num).split('').reverse().join(''));

    return (num - reverseNum) == 0;
  }
}

class PalidromicInteger {
  static solve(num) {
    let temp = 0;
    const source = num;

    while (num > 0) {
      temp = temp * 10 + (num % 10);
      num = Math.floor(num / 10);
    }

    return source == temp;
  }
}

console.log(PalidromicInteger.solve(43));
console.log(PalidromicInteger.solve(121));
console.log(PalidromicInteger.solve(22022));
console.log(PalidromicInteger.solve(5500));
