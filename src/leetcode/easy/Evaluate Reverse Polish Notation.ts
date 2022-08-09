// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const OPERATIONS = new Set(['-', '+', '/', '*']);

function evalRPN(tokens: string[]): number {
    let nums = [];

    for (let symbol of tokens) {
        if (OPERATIONS.has(symbol)) {
             makeOperation(nums, symbol);
        } else {
            nums.push(Number(symbol));
        }
    }

    return nums[0];
}

function makeOperation(nums, operation) {
    const second = nums.pop();
    const first =  nums.pop();

    switch (operation) {
        case "+": nums.push(first + second); break;
        case "-": nums.push(first - second); break;
        case "/": nums.push(~~(first / second)); break;
        case "*": nums.push(second * first); break;
    }
}

console.log(evalRPN(["2","1","+","3","*"]), 9);
console.log(evalRPN(["4","13","5","/","+"]), 6);
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]), 22);

