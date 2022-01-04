// https://binarysearch.com/problems/The-Accountant
class TheAccountant {
    static solve(n) {
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let res = '';

        while (n) {
            // Чтобы получить правильный индекс мы просто добавляем число (power - 1) = 25
            // Например для z = 25, но если просто n % 26 == 0 то ну нужно добавить еще 25
            // для c = 2, 30 % 3 (3 буква) но нам нужен 2-индекс (30 + 25) % 26 == 2
            let code = (n + 25) % 26;
            res = alpha[code] + res;
            n = Math.trunc((n - 1) / 26);
        }

        return res;
    }
}

class TheAccountant1 {
    static solve(n) {
        let power = 26;
        let res = '';

        while (n > power) {
            let rest = Math.floor(n % power) || power;
            let code = 64 + rest;

            res = String.fromCharCode(code) + res;
            n = (n - rest) / power;
        }

        if (n) {
            res = String.fromCharCode(64 + n) + res;
        }

        return res;
    }
}

// console.log(TheAccountant.solve(26));
// console.log(TheAccountant.solve(1000000));
// console.log(TheAccountant.solve(27));
console.log(TheAccountant.solve(99764083));

// console.log(new Array(26).fill(65).map((a, i) => String.fromCharCode(a+i)));
