//https://binarysearch.com/problems/Task-Hare
class TaskHare {
    static solve(tasks, people) {
        let count = 0;
        tasks = tasks.sort((a, b) => a - b);
        people = people.sort((a, b) => a - b);

        let j = 0;
        let i = 0;

        while (i < tasks.length && j < people.length) {
            if (people[j] <= tasks[i]) {
                i++;
                j++;
                count++;
            } else {
                j++;
            }
        }

        return count;

    }
}

class TaskHare1 {
    static solve(tasks, people) {
        let count = 0;
        tasks = tasks.sort((a, b) => a - b);
        people = people.sort((a, b) => a - b);

        let j = 0;

        for (let t of tasks) {
            while (j < people.length && people[j] < t) j++;
            if (j == people.length) break;

            if (people[j] >= t) count++;
            j++;
        }

        return count;

    }
}

console.log(TaskHare.solve([3, 2, 9, 13], [10, 5, 2, 1]), 3);
