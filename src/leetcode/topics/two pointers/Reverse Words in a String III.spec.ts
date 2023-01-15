// https://leetcode.com/problems/reverse-words-in-a-string-iii/
function reverseWord(word: string): string {
    const arr = word.split("");
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }

    return arr.join("");
}

function reverseWords1(s: string): string {
    return s.split(" ").map(reverseWord).join(" ");
}

function reverseWords(s: string): string {
    let L = 0;
    let R = 0;
    let str = "";

    while (R < s.length) {
        if (s[R] == ' ' || R == s.length - 1) {
            for (let i = R - 1; i >= L; i--) str += s[i];
            L = R - 1;
        }

        R++;
    }

    return str;
}


describe("Reverse Words in a String III", () => {
    it('case 1', () => {
        expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
    })

    it('case 2', () => {
        expect(reverseWords("God Ding")).toBe("doG gniD");
    })
})
