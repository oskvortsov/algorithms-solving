// https://leetcode.com/problems/daily-temperatures/

function dailyTemperatures(temperatures: number[]): number[] {
    const size = temperatures.length;
    let stack = [];
    let ans = new Array(size).fill(0);

    for (let curDay = 0; curDay < size; curDay++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[curDay]) {
            let prevDay = stack.pop();
            ans[prevDay] = curDay - prevDay;
        }

        stack.push(curDay);
    }

    return ans;
}

function dailyTemperaturesOld(temperatures: number[]): number[] {
    const size = temperatures.length;
    let stack = [];
    let ans = new Array(size).fill(0);

    for (let i = 0; i < size; i++) {
        while (stack.length) {
            let last = stack[stack.length - 1];

            if (temperatures[last] >= temperatures[i]) break;
            ans[last] = i - last;
            stack.pop();
        }

        if (i == size - 1) break;

        if (temperatures[i] >= temperatures[i + 1]) {
            stack.push(i);
        } else {
            ans[i] = 1;
        }
    }

    return ans;
};


const case1 = [73,74,75,71,69,72,76,73];
const ans1 = [1,1,4,2,1,1,0,0];
console.log(dailyTemperatures(case1), ans1);

const case2 = [30,40,50,60];
const ans2 = [1,1,1,0];
console.log(dailyTemperatures(case2), ans2);

const case3 = [30,60,90];
const ans3 = [1,1,0];
console.log(dailyTemperatures(case3), ans3);

const case4= [89,62,70,58,47,47,46,76,100,70];
const ans4 = [8,1,5,4,3,2,1,1,0,0];
console.log(dailyTemperatures(case4), ans4);
