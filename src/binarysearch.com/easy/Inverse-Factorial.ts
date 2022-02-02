// https://binarysearch.com/problems/Inverse-Factorial
class InverseFactorial {
    static solve(n) {
        let temp = 1;
        let index = 1;

        while (temp < n) {
            temp *= index;
            index++;
        }

        return temp == n ? index - 1 : -1;
    }
}

console.log(InverseFactorial.solve(6), 3);
console.log(InverseFactorial.solve(10), -1);
