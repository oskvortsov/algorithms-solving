function generate(numRows: number): number[][] {
    let result = [];

    for (let i = 1; i <= numRows; i++) {
        let temp = [];
        const prev = result[i - 2] || [];

        for (let j = 0; j < i; j++) {
            temp.push(prev[j - 1] + prev[j] || 1);
        }

        result.push(temp);
    }

    return result;
}

console.log(generate(5));
