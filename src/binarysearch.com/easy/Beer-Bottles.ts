// https://binarysearch.com/problems/Beer-Bottles
class BeerBottles {
    static solve(n) {
        let ans = n;
        let rest = 0;

        while (n > 2) {
            rest = n % 3;
            n = Math.trunc(n / 3);
            ans += n;
            n += rest;
        }

        return ans;
    }
}

console.log(BeerBottles.solve(632), 947);
console.log(BeerBottles.solve(635), 952);
console.log(BeerBottles.solve(9), 13);
console.log(BeerBottles.solve(761), 1141);
