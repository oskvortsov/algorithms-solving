// https://binarysearch.com/problems/Ancient-Astronaut-Theory

class AncientAstronautTheory {
    static solve(dictionary, s) {
        let dictionaryMap = {};

        for (let i = 0; i < dictionary.length; i++) {
            dictionaryMap[dictionary[i]] = i;
        }

        let index = -1;

        for (let i = 0; i < s.length; i++) {
            if (s[i] in dictionaryMap) {
                let newIndex = dictionaryMap[s[i]];

                if (index !== -1 && index > newIndex) {
                    return false;
                }

                index = newIndex;
            }
        }

        return true;
    }
}


console.log(AncientAstronautTheory.solve('acb', 'aaaa h ccc i bbb'));
console.log(AncientAstronautTheory.solve('acb', 'aaaacccbc'));
console.log(AncientAstronautTheory.solve('nmr1', 'tm'));
console.log(AncientAstronautTheory.solve('ydxgnuehqr', 'eqrafv'));
