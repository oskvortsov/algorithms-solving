function hammingWeight(n: number): number {
    let res = 0;
    let current = 1;

    for (let i = 0; i < 32; i++) {
        if (n & current) res++;
        current <<= 1;
    }

    return res;
}

console.log(hammingWeight(11111111111111111111111111111101));
console.log(hammingWeight(1011));
console.log(hammingWeight(5));

