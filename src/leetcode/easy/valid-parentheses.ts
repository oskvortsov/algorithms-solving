function isValid(s: string): boolean {
    const ordering = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (['(', '{', '['].includes(char)) {
            ordering.push(char);
            continue;
        }

        const lastOpenBracket = ordering.pop();

        if (
            char == ')' && lastOpenBracket !== '(' ||
            char == ']' && lastOpenBracket !== '[' ||
            char == '}' && lastOpenBracket !== '{'
        ) return false;
    }

    return !ordering.length;
}


const MAP_BRACKETS = {
    '(': ')',
    '{': '}',
    '[': ']',
}
function isValid1(s: string): boolean {
    const ordering = [];

    for (let i = 0; i < s.length; i++) {
        const symbol = s[i];

        if (symbol in MAP_BRACKETS) {
            ordering.push(symbol);
            continue;
        }

        const lastOpeningBracket = ordering.pop();
        const closingBrackets = MAP_BRACKETS[lastOpeningBracket];

        if (closingBrackets !== symbol) return false;
    }

    return !ordering.length;
}

console.log(isValid('(){}[]'));
console.log(isValid('({[]})'));
console.log(isValid('({]})'));
console.log(isValid('['));
