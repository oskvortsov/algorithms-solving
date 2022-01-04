// https://binarysearch.com/problems/CPU-Scheduling

class CPUScheduling {
    static solve(tasks) {
        tasks = tasks.sort((a, b) => {
            if (a[1] == b[1]) {
                return a[0] - b[0];
            }

            return a[1] < b[1] ? a[1] - b[1] : a[2] - b[2];
        })

        return tasks.map(task => task[0]);
    }
}

console.log(CPUScheduling.solve([[0,1,5],[1,1,5],[2,2,2]]));
