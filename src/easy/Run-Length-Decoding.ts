// https://binarysearch.com/problems/Run-Length-Decoding

class RunLengthDecoding {
    static solve(s) {
        return s.match(/(\d{1,100}[a-z])/gm).reduce((acc, i) => {
            let num = i.substr(0, i.length - 1);
            let char = i.substr(i.length - 1);

            acc += char.repeat(num);

            return acc;
        }, '');
    }
}

class RunLengthDecoding1 {
    static solve(s) {
        let result = '';
        let num = '';

        for (let i = 0; i < s.length; i++) {
            if (!isNaN(+s[i])) {
                num += s[i];
            } else {
                result += s[i].repeat(+num);
                num = ''
            }
        }

        return result;
    }
}

console.log(RunLengthDecoding1.solve("4a3b2c1d2a"));
console.log(RunLengthDecoding1.solve("10a"));
