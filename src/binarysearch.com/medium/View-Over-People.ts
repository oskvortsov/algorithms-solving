// https://binarysearch.com/problems/View-Over-People
class ViewOverPeople {
    static solve(heights, k) {
        if (!heights.length) return heights;

        let persons = [];
        let queue = [];
        let prev = Infinity;

        for (let i = 0; i < heights.length; i++) {
            if (queue.length > k) {
                debugger;
                let val = queue.shift();
                if (heights[val] != heights[queue[0]]) persons.push(val);
            }

            if (prev >= heights[i]) {
                queue.push(i);
            } else {
                queue = [i];
            }
            prev = heights[i];
        }

        for (let i = 0; i < queue.length; i++) {
            if (heights[queue[i]] !== heights[queue[i + 1]]) {
                persons.push(queue[i]);
            }
        }


        return persons;
    }
}

console.log(ViewOverPeople.solve([3, 1, 2], 2), [ 0, 2 ]);
// console.log(ViewOverPeople.solve([5, 5, 5, 5], 3), [ 3 ]);
// console.log(ViewOverPeople.solve([9, 8, 7, 7, 4, 9], 2), [0, 1, 5]);
// console.log(ViewOverPeople.solve([1, 3, 1], 3), [ 1, 2 ]);
// console.log(ViewOverPeople.solve([1], 0), [ 0 ]);

