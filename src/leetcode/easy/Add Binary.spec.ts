// https://leetcode.com/problems/add-binary/

function addBinary(a: string, b: string): string {
    let res = '';
    let buffer = 0;

    let indexA = a.length - 1;
    let indexB = b.length - 1;

    while (indexA > -1 || indexB > -1) {
        let cur = 0;
        if (indexA > -1) cur += +a[indexA--];
        if (indexB > -1) cur += +b[indexB--];
        cur += buffer;

        buffer = cur > 1 ? 1 : 0;
        res = String(cur % 2) + res;
    }

    if (buffer) res = String(buffer) + res;

    return res;
}

describe('Add Binary', () => {
    it('case 1', () => {
        expect(addBinary('11', '1')).toBe('100');
    })

    it('case 2', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
    })
})
