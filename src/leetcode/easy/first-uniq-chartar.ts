function firstUniqChar(s: string): number {
    let hmap = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!(char in hmap)) {
            hmap[char] = 0;
        }

        hmap[char]++;
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (hmap[char] == 1) return i;
    }

    return -1;
}

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
