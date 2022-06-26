/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let len = s.length - 1;
    for (let i = 0; i < Math.trunc(s.length / 2); i++) {
        [s[i], s[len - i]] = [s[len - i], s[i]];
        debugger;
    }
}

function reverseNumber(x: number): number {
    if (!x) return x;

    let sign = x / Math.abs(x);
    let s = String(x).split('');

    if (sign < 0) s.shift();

    const num =  Number(s.reverse().join('')) * sign;
    return num > Math.pow(2, 31) || num < -Math.pow(2, 31) ? 0 : num;
}

const str1 = ["h","e","l","l","o"];
reverseString(str1)
console.log(str1);

const str2 = ["H","a","n","n","a","h"];
reverseString(str2);
console.log(str2);


console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(-2147483648));
