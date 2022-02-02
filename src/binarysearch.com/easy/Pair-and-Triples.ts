// https://binarysearch.com/problems/Pair-and-Triples
class PairAndTriples {
    static solve(s) {
        let digitsMap = new Map();

        for (let i = 0; i < s.length; i++) {
            digitsMap.set(s[i], (digitsMap.get(s[i]) || 0) + 1);
        }

        let haveTriple = false;
        let havePair = false;

        for (let num of digitsMap.values()) {
            let rest = num % 3;

            if (num >= 3 && (rest == 2 || rest == 0)) {
                haveTriple = true;
            }

            if (rest == 2) havePair = true;

            if (!(rest == 2 || rest == 0)) return false;
        }

        return s.length > 2 ? havePair && haveTriple : havePair;
    }
}

console.log(PairAndTriples.solve('111222'), false);
console.log(PairAndTriples.solve('323'), false);
console.log(PairAndTriples.solve('21112'));
console.log(PairAndTriples.solve('55'));
console.log(PairAndTriples.solve('11111'));
console.log(PairAndTriples.solve('22222222'));
