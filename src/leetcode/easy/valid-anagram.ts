function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const hmap = {};

    const len = s.length;
    for (let i = 0; i < len; i++) {
        hmap[s[i]] = (hmap[s[i]] || 0) + 1;
    }

    for (let i = 0; i < len; i++) {
        const char = t[i];
        if (!(char in hmap)) return false;

        hmap[char]--;
        if (hmap[char] == 0) {
            delete hmap[char]
        }
    }

    return true;
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
