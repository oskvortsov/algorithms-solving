// https://binarysearch.com/problems/Social-Distancing
class SocialDistancing {
    static solve(s, k) {
        let suffix = null;
        let prefix = null;

        for (let i = 0; i < s.length; i++) {
            if (s[i] == 'x') {
                if (prefix == null) {
                    prefix = i;

                    if (prefix >= k) return true;
                } else if (suffix == null) {
                    suffix = i;
                } else {
                    prefix = suffix;
                    suffix = i;
                }

                if (suffix - prefix >= k * 2) {
                    return true;
                }
            }
        }


        if (prefix == null) return true;
        if (suffix == null) return s.length - 1 - prefix >= k;
        return suffix - prefix >= k * 2 || s.length - 1 - suffix >= k;
    }
}

console.log(SocialDistancing.solve('xx..xx..xx...', 3), true);
console.log(SocialDistancing.solve(".xx...x", 2), true);
console.log(SocialDistancing.solve('..x', 2), true);
console.log(SocialDistancing.solve('x..', 2), true);
console.log(SocialDistancing.solve("x.xxxx...", 4), false);
console.log(SocialDistancing.solve('.xxx.xx.', 2), false);
console.log(SocialDistancing.solve('x.x', 2), false);
console.log(SocialDistancing.solve('x..x', 2), false);
console.log(SocialDistancing.solve('x..', 3), false);
