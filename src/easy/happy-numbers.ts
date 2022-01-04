//https://binarysearch.com/problems/Happy-Numbers
class HappyNumbers {
  solve(n: number): boolean {
    let temp: number = n;
    let uniq = {};

    while (temp !== 1) {
      temp = this.transmitNumber(temp);

      if (uniq[temp]) break;

      uniq[temp] = 1;
    }

    return temp === 1;
  }

  transmitNumber(n: number) {
    let result = 0;

    while (n > 0) {
      result += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }

    return result;
  }
}
