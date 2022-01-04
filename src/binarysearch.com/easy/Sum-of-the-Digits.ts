// https://binarysearch.com/problems/Sum-of-the-Digits
class SumOfTheDigits {
    static solve(num) {
        let sum = 0;

        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }
}

console.log(SumOfTheDigits.solve(123));
console.log(SumOfTheDigits.solve(1234));
console.log(SumOfTheDigits.solve(0));
console.log(SumOfTheDigits.solve(10));
