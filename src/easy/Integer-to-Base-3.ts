// https://binarysearch.com/problems/Integer-to-Base-3
class IntegerToBase3 {
    static solve(n) {
        let res = '';

        while(n > 0) {
            res += n % 3 + res;
            n = Math.floor(n / 3);
        }

        return res || '0';
    }
}

console.log(IntegerToBase3.solve(7), "21");
console.log(IntegerToBase3.solve(11), "102");
console.log(IntegerToBase3.solve(35), "102");
console.log(IntegerToBase3.solve(29), Number(29).toString(3));
console.log(IntegerToBase3.solve(111), Number(111).toString(3));
console.log(IntegerToBase3.solve(1111), Number(1111).toString(3));
