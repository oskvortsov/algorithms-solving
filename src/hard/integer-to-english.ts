//https://binarysearch.com/problems/Integer-to-English
const numberWords = {
  '0': 'Zero',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  '13': 'Thirteen',
  '14': 'Fourteen',
  '15': 'Fifteen',
  '16': 'Sixteen',
  '17': 'Seventeen',
  '18': 'Eighteen',
  '19': 'Nineteen',
  '20': 'Twenty',
  '30': 'Thirty',
  '40': 'Forty',
  '50': 'Fifty',
  '60': 'Sixty',
  '70': 'Seventy',
  '80': 'Eighty',
  '90': 'Ninety',
  '100': 'Hundred',
  '1000': 'Thousand',
  '1000000': 'Million',
  '1000000000': 'Billion',
};

class IntegerToEnglish {
  solve(num: number): string {
    return this.getNumberWords(num);
  }

  getThreeDigitWords(num: number) {
    let result = '';
    let threeDigit = Math.floor(num / 100);
    let twoDigit = num % 100;
    let oneDigit = twoDigit % 10;

    if (threeDigit > 0) {
      result = ` ${numberWords[threeDigit]} ${numberWords[100]}`;
    }

    if (twoDigit > 20) {
      result += ` ${numberWords[Math.floor(twoDigit / 10) * 10]}`;

      if (oneDigit !== 0) {
        result += ` ${numberWords[oneDigit]}`;
      }
    } else if (twoDigit > 0) {
      result += ` ${numberWords[twoDigit]}`;
    }

    return result;
  }

  getNumberWords(num: number) {
    if (num === 0) {
      return numberWords[num];
    }

    let result = '';
    let thousand = 10 ** 3;
    let power = 0;

    while (num > 0) {
      let current = num % thousand;

      if (current > 0) {
        if (power > 0) {
          result = ` ${numberWords[thousand ** power]}` + result;
        }

        result = this.getThreeDigitWords(num % thousand) + result;
      }

      power++;
      num = Math.floor(num / thousand);
    }

    return result.trimStart();
  }
}
