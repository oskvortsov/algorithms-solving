function climbStairs(n: number): number {
    if (n < 2) return 1;

    let a = 1;
    let b = 1;
    let res = 0;

    for (let i = 2; i <= n; i++) {
        res = a + b;
        a = res - a;
        b = res;
    }

    return res;
}

function climbStairs1(n: number): number {
    if (n < 2) return 1;
    return climbStairs(n - 1) + climbStairs(n - 2);
}


console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs1(5));
