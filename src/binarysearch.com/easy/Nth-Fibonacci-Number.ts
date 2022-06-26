// https://binarysearch.com/problems/Nth-Fibonacci-Number
class NthFibonacciNumber {
    static solve(n) {
        const sqrtFive = Math.sqrt(5);
        return Math.trunc(
            (Math.pow((1 + sqrtFive), n) - Math.pow((1 - sqrtFive), n)) /
            (2 ** n * sqrtFive)
        );
    }
}

console.log(NthFibonacciNumber.solve(4));
console.log(NthFibonacciNumber.solve(5));
console.log(NthFibonacciNumber.solve(29));
