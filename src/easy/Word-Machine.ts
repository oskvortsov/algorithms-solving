// https://binarysearch.com/problems/Word-Machine
import { throws } from 'assert';

const operationMap = {
    "POP": stack => stack.length < 1 ? null : stack.pop(),
    "DUP": stack => stack.length < 1 ? null : stack.push(stack[stack.length - 1]),
    "+": stack => stack.length < 2 ? null : stack.push(stack.pop() + stack.pop()),
    "-": stack => stack.length < 2 ? null : stack.push(stack.pop() - stack.pop()),
}

const isNumber = operation => !isNaN(+operation);

class WordMachine {

    static solve(ops) {
       const stack = [];

       for (let operation of ops) {
           if (isNumber(operation)) stack.push(+operation)
           else if (operationMap[operation](stack) === null)  return -1
       }

       return stack.pop();
    }
}

console.log(WordMachine.solve(["1", "5", "DUP", "3", "-"]));
