// https://binarysearch.com/problems/Stuck-Keyboard

class StuckKeyboard {
    static solve(typed, target) {
        if (!target.length) return target.length == typed.length;

        let tarIndex = 0;
        let typIndex = 0;
        let prev = '';

        while (tarIndex < target.length || typIndex < typed.length) {
            if (target[tarIndex] == typed[typIndex]) {
                prev = typed[typIndex];
                typIndex++;

                if (tarIndex < target.length) tarIndex++;
            } else if (prev == typed[typIndex]) {
                prev = typed[typIndex];
                typIndex++;
            } else {
                return false;
            }
        }

        return true;
    }
}

console.log(StuckKeyboard.solve('aaabcccc', 'aabc'));
console.log(StuckKeyboard.solve('ab', 'a'));
