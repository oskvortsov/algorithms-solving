// https://leetcode.com/problems/generate-parentheses/

function generateParenthesis(n: number): string[] {
    let combinations = [];
    generate(combinations, '(', (n * 2) - 1, 1);

    return combinations;
}

function generate(combinations: string[], temp, size, balance: number) {
    if (balance < 0 || size - balance < 0) {
        return;
    }

    size--;
    const first = temp + '(';
    const second = temp + ')'

    if (size) {
        generate(combinations, first, size, balance + 1);
        generate(combinations, second, size, balance - 1);
        return;
    }

    balance + 1 == 0 && combinations.push(first);
    balance - 1 == 0 && combinations.push(second);
}

console.log(generateParenthesis(3), ["((()))","(()())","(())()","()(())","()()()"]);
// console.log(["()"]);
