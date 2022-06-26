class UglyNumberSequel {
    static solve(n) {
        if (!n) return 1;

        let temp = new Set([1, 2, 3, 4, 5, 6]);




        return temp;
    }
}

function nextVal(two) {

}


class UglyNumberSequel1 {
    static solve(n) {
        if (!n) return 1;

        let nextVal = returnFuncNextVal1();
        let temp = new Set([1, 2, 3, 4, 5]);
        let last = 1;

        while (temp.size !== (n + 1)) {
            let [val, step] = nextVal();

            if (temp.has(val / step)) {
                temp.add(val);
                last = val;
            }
        }

        console.log([...temp.values()])

        return last;
    }
}

function returnFuncNextVal1() {
    let [two, three, five] = [2,3,5];

    return function nextVal() {
        let nextTwo = two + 2;
        let nextThree = three + 3;
        let nextFive = five + 5;


        if (nextTwo < nextThree && nextTwo < nextFive) {
            two = nextTwo;
            return [nextTwo, 2];
        }

        if (nextThree < nextFive) {
            three = nextThree;
            return [nextThree, 3];
        }

        five = nextFive;
        return [nextFive, 5];
    }
}

console.log(UglyNumberSequel1.solve(15));
console.time('UglyNumberSequel');
// console.log(UglyNumberSequel.solve(942), 35429400);
console.timeEnd('UglyNumberSequel');
