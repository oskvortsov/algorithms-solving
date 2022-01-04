// https://binarysearch.com/problems/Run-Length-Decoded-String-Iterator

class RunLengthDecodedIterator {
    private data: string = null;
    constructor(s) {
        this.data = s;
        return null;
    }

    next() {
        if (!this.hasnext()) {
            return '';
        }

        let digitalLen = 0;

        while (!isNaN(+this.data[digitalLen])) {
            digitalLen++;
        }

        let digital = this.data.substr(0, digitalLen);
        let char = this.data[digitalLen];

        const rest = this.data.substr(digitalLen + 1);

        if (Number(digital) == 1) {
            this.data = rest;
        } else {
            this.data = `${Number(digital) - 1}${char}${rest}`;
        }

        return char;
    }

    hasnext() {
        return !!this.data?.length;
    }
}

class RunLengthDecodedIterator1 {
    private data: string = null;
    constructor(s) {
        this.data = s;
        return null;
    }

    next() {
        if (!this.hasnext()) {
            return '';
        }

        let [stroke,digital, char] = this.data.match(/(\d*)(.)/);
        let rest = this.data.substr(stroke.length);

        if (Number(digital) - 1 == 0) {
            this.data = rest;
        } else {
            this.data = `${Number(digital) - 1}${char}${rest}`;
        }


        return char;
    }

    hasnext() {
        return !!this.data?.length;
    }
}

class RunLengthDecodedIterator2 {
    private data: { num: number, char: string }[] = [];

    constructor(s) {
        s.match(/(\d*)(.)/gm).forEach(stroke => {
            this.data.push({
                num: Number(stroke.substr(0, stroke.length - 1)),
                char: stroke[stroke.length - 1]
            })
        })
        return null;
    }

    next() {
        if (!this.hasnext()) return '';

        this.data[0].num -= 1;
        let { char, num } = this.data[0];

        if (!num) this.data.shift();

        return char;
    }

    hasnext() {
        return !!this.data?.length;
    }
}

const testIterator = new RunLengthDecodedIterator2('2e10b');
let result = [];

for (let i = 0; i < 40; i++) {
    result.push(testIterator.next());
}


console.log(result);


