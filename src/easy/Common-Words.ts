// https://binarysearch.com/problems/Common-Words
class CommonWords {
    static solve(s0, s1) {
        if (!s0 || !s1) return 0;

        let words1 = new Set([...s0.toLowerCase().split(' ')]);

        let count = 0;
        s1.toLowerCase().split(' ').forEach(word => {
            if (words1.has(word)) {
             count++;
             words1.delete(word);
            }
        });

        return count;
    }
}

console.time('CommonWords');
console.log(CommonWords.solve("c a", "a"));
console.log(CommonWords.solve("hello world hello oyster", "world is your oyster"))
console.timeEnd('CommonWords');
