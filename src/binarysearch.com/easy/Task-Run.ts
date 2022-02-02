// https://binarysearch.com/problems/Task-Run
class TaskRun {
    static solve(tasks, k) {
        let count = tasks.length;
        let stack = new Set();

        for (const t of tasks) {
            if (stack.has(t)) {
                count += k;
                stack.clear();
            } else {
                stack.add(t);
            }
        }

        return count;
    }
}

console.log(TaskRun.solve([0, 1, 0, 1], 2));
