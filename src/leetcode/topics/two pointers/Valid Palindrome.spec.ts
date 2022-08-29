// https://leetcode.com/problems/valid-palindrome/

function isPalindrome1(s: string): boolean {
    let L = 0;
    let R = s.length - 1;

    while (L < R) {
        while (L < R && !isAphaNum(s[L])) {
            L++;
        }

        while(L < R && !isAphaNum(s[R])) {
            R--;
        }

        if (s[L++].toLowerCase() !== s[R--].toLowerCase()) return false;
    }

    return true;
}

function isAphaNum(char: string): boolean {
    return !!char.match(/[a-zA-Z0-9]/gm);
}

function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let L = 0;
    let R = s.length - 1;

    while (L < R) {
        if (s[L++] !== s[R--]) return false;
    }

    return true;
}

describe('Valid Palindrome', () => {
    it('case 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    })

    it('case 2', () =>{
        expect(isPalindrome('race a car')).toBeFalsy();
    })

    it('case 3', () => {
        expect(isPalindrome(' ')).toBeTruthy();
    })

    it('case 4', () => {
        expect(isPalindrome('a.')).toBeTruthy();
    })

    it('case 5', () => {
        expect(isPalindrome('0P')).toBeFalsy();
    })

    it('case 6', () => {
        expect(isPalindrome('ab_a')).toBeTruthy();
    })
})
