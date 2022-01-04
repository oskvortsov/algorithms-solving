// https://binarysearch.com/problems/Noisy-Palindrome

class NoisyPalindrome {
    static solve(s) {
        let result = true;
        s = s.match(/[a-z]/gm);

        let size = s?.length;
        for(let i = 0; i < size / 2; i++) {
            if (s[i] !== s[size - (i + 1)]) {
                result = false;
                break;
            }
        }

        return result;
    }
}

console.log(NoisyPalindrome.solve("a92bcbXa"));
console.log(NoisyPalindrome.solve("abZ"));
