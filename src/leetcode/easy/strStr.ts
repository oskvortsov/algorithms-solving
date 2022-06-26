function strStr(haystack: string, needle: string): number {
    let i = 0;
    let j = 0;

    while (i < haystack.length) {
        while (needle[j] !== undefined && haystack[i + j] == needle[j]) {
            j++;
        }

        if (j == needle.length) return i;

        j = 0;
        i++;
    }

    return -1;
}

// console.log(strStr('hello', 'll'));
// console.log(strStr('aaaaa', 'bba'));
console.log(strStr('a', 'a'));
