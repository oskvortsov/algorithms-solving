// https://binarysearch.com/problems/Weird-Clock
class WeirdClock {
    static solve(s) {
        let nums: any = new Set();
        let currentTime = '';

        for (let i = 0; i < s.length; i++) {
            if (!isNaN(s[i])) {
                currentTime += s[i];
                nums.add(s[i]);
            }
        }

        if (nums.size == 1) return s;

        nums = [...nums.values()];

        let times = [];
        let minTime = Infinity;

        for (let first of nums) {
            for (let second of nums) {
                for (let third of nums) {
                    for (let four of nums) {
                        let hh = `${first}${second}`;
                        let mm = `${third}${four}`;

                        let timeNumber = Number(`${hh}${mm}`);
                        if (isValid(hh, mm)) {
                            if (timeNumber > +currentTime) {
                                minTime = Math.min(timeNumber, minTime);
                            }
                            times.push(timeNumber);
                        }
                    }
                }
            }
        }

        if (times[times.length - 1] == currentTime || minTime == Infinity) {
            return toTimeFormat(times[0]);
        }

        return toTimeFormat(minTime);
    }
}

function isValid(hh, mm) {
    return Number(hh) > -1 && Number(hh) < 24 && -1 < Number(mm) && Number(mm) < 60;
}

function toTimeFormat(time) {
    let s = String(time).padStart(4, '0');

    return s.substr(0, 2) + ':' + s.substr(2, 4);
}



console.log(WeirdClock.solve('04:26'));
console.log(WeirdClock.solve('08:58'));
// console.log(WeirdClock.solve('11:11'));
console.log(WeirdClock.solve('14:23'));
// console.log(WeirdClock.solve('11:03'));
// console.log(WeirdClock.solve('23:58'));
