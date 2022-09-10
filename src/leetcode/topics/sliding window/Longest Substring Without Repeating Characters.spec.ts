// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
    let map = {};
    let l = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            l = Math.max(map[s[i]], l);
        }

        res = Math.max(res, i - l + 1);
        map[s[i]] = i + 1;
    }

    return res;
}

function lengthOfLongestSubstring2(s: string): number {
    let L = 0;
    let R = 0;
    let chars = new Map<String, number>();
    let max = 0;

    while (R < s.length) {
        let char = s[R++];

        if (!chars.has(char)) {
            chars.set(char, 0);
        }

        chars.set(char, chars.get(char) + 1);

        while (chars.get(char) > 1) {
            let leftChar = s[L++];
            chars.set(leftChar, chars.get(leftChar) - 1);
        }

        max = Math.max(max, R - L);
    }

    return max;
}

function lengthOfLongestSubstring1(s: string): number {
    let map = new Map();
    let index = 0;
    let windowSize = 0;
    let cur = 0
    let L = 0;
    let prevL = 0;

    while (index < s.length) {
        let next = s[index];

        if (map.has(next)) {
            windowSize = Math.max(cur, windowSize);

            prevL = L;
            L = map.get(next);
            cur = index - L;

            for (let i = prevL; i < L; i++) map.delete(s[i]);
        } else {
            index++;
            cur++;
            map.set(next, index);
        }
    }

    windowSize = Math.max(index - L, windowSize);

    return windowSize;
}

describe("Longest Substring Without Repeating Characters", () => {
    it("case 1", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    })

    it("case 2", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    })

    it("case 3", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    })

    it("case 4", () => {
        expect(lengthOfLongestSubstring(" ")).toBe(1);
    })
})
