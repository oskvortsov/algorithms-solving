function reverseBits(n: number): number {
    return parseInt(
        Number(n).toString(2).padStart(32, '0').split('').reverse().join(''),
        2
    );
}

console.log(reverseBits(43261596));
