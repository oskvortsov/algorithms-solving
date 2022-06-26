function myAtoi(s: string): number {
    const val = parseInt(s.split(new RegExp('[ ]{1:}'))[0]);

    if (!val) return 0;

    const num = Number(val);
    const max = Math.pow(2, 31) - 1;
    const min = -(max + 1);

    if (num < min) return min;
    if (num > max) return max;

    return num;
}

console.log(myAtoi("4193 with words"));
console.log(myAtoi("-4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("+-12"));
console.log(myAtoi("   +0 123"));
console.log(myAtoi("-5-"));
console.log(myAtoi("00000-123"));
