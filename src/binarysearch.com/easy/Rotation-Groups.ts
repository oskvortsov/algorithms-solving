// https://binarysearch.com/problems/Rotation-Groups
class RotationGroups {
    static solve(words) {
        let groups = new Map();
        let count = 0;

        words.forEach(word => {
            let key = word.length;
            let group = groups.get(word.length) || '';

            if (!group.includes(word)) {
                groups.set(key, group + ' ' + word + word);
                count++;
            }
        })

        return count;
    }
}

console.log(RotationGroups.solve(["abc", "xy", "yx", "z", "bca"]), 3);
console.log(RotationGroups.solve(["abcdefg","bedgafc"]), 2);
console.log(RotationGroups.solve(["kmi","eif","eif","kmi"]), 2);
