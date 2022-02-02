//https://binarysearch.com/problems/Prime-Factorization
class PrimeFactorization {
    static solve(n) {
        const result = [];

        while (n > 1 && !(n % 1)) {
            let factor = Math.trunc(Math.sqrt(n));

            if (factor == 1) {
                result.push(n);
                break;
            }

            if ((n / factor) % 1) {
                factor = n;
            }

            result.push(factor);

            n /= factor;
        }

        return result.reverse();
    }
}

console.log(PrimeFactorization.solve(12), [2, 2, 3]);
console.log(PrimeFactorization.solve(5), [5]);
