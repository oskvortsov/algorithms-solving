// https://leetcode.com/problems/permutation-in-string/

function checkInclusion1(s1: string, s2: string): boolean {
    let dict = {};
    for (let i = 0; i < s1.length; i++) {
        dict[s1[i]] = (dict[s1[i]] || 0) + 1;
    }


    for (let i = 0; i < s2.length; i++) {

    }
}

function checkInclusion(s1: string, s2: string): boolean {
    let dict = {};
    for (let i = 0; i < s1.length; i++) {
        dict[s1[i]] = (dict[s1[i]] || 0) + 1;
    }

    for (let i = 0; i < s2.length; i++) {
        if (dict[s2[i]]) {
            let table = {};
            let l = 0;

            while (i + l < s2.length) {
                let index = i + l;
                let char = s2[index];

                if (!dict[char]) {
                    i = index;
                    break;
                }

                if (!table[char]) table[char] = [];

                l++;
                table[char].push(index);

                if (table[char].length > dict[char]) {
                    i = table[char][0];
                    break;
                }

                if (index - i + 1 == s1.length) {
                    return true;
                }
            }
        }
    }

    return false;
}

describe('Permutation in String', () => {
    it('case 1', () => {
        expect(checkInclusion("ab", "eidbaooo")).toBeTruthy();
    })

    it('case 2', () => {
        expect(checkInclusion("ab", "eidboaoo")).toBeFalsy();
    })

    it('cast 3', () => {
        expect(checkInclusion("hello", "ooolleoooleh")).toBeFalsy();
    })
})
