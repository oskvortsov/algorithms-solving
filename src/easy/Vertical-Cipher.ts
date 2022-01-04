class VerticalCipher {
    static solve(s, k) {
        if (s < k) return s.split('');

        const temp = new Array(k).fill('');

        for (let i = 0; i < s.length; i++) {
            temp[i % k] += s[i];
        }

        return temp;
    }
}

console.log(VerticalCipher.solve("abcdefghi", 5));
