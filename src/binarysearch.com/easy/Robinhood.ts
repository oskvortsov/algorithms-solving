// https://binarysearch.com/problems/Robinhood
class Robinhood {
    static solve(n, e, o, t) {
        let year = 0;

        while (n < t) {
            year++;
            n += (n * (year % 2 == 1 ? e : o)) / 100;
        }

        return year;
    }
}

console.log(Robinhood.solve(100, 20, 10, 130));
console.log(Robinhood.solve(221, 39, 470, 3148603));
