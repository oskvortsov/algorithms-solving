// https://binarysearch.com/problems/Social-Distancing
class SocialDistancing {
    static solve(s, k) {
        const distance = k - 1;
        if (!distance) return true;

        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] == 'x') {
                if (count >= distance) return true;
                count = 0;
            } else {
                count++;
            }
        }

        return count >= distance;
    }
}

console.log(SocialDistancing.solve('x..', 2), true);
console.log(SocialDistancing.solve('x.x', 2), false);
console.log(SocialDistancing.solve('..x', 2), true);
console.log(SocialDistancing.solve('x..x', 2), false);
