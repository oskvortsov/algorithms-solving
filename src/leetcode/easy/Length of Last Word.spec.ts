// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    let R = s.length - 1;
    while (s[R] == ' ' && R > -1) R--;

    let L = R;
    while (s[L] !== ' ' && L > -1) L--;

    return R - L;
}

describe('Length of Last Word', () => {
    it('case 1', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    })

    it('case 2', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
    })

    it('case 3', () => {
        expect(lengthOfLastWord('a')).toBe(1);
    })
})
