/***

 A backtracking algorithm begins with an empty solution and extends the
 solution step by step. The search recursively goes through all different ways how
 a solution can be constructed.

 As an example, consider the problem of calculating the number of ways n
 queens can be placed on an n x n chessboard so that no two queens attack each
 other. For example, when n = 4, there are two possible solutions:
 */

class Backtracking {
    private column = [];
    private diag1 = [];
    private diag2 = [];
    private n = 0;
    private count = 0;

    private search(y: number) {
        if (y == this.n) {
            this.count++;
            return;
        }

        const { column, diag1, diag2, n } = this;
        for (let x = 0; x < n; x++) {
            if (column[x] || diag1[x + y] || diag2[x - y + n - 1]) continue;

            column[x] = diag1[x + y] = diag2[x - y + n - 1] = 1;
            this.search(y + 1);
            column[x] = diag1[x + y] = diag2[x - y + n - 1] = 0;
        }
    }

    public solve(n: number) {
        this.n = n;

        this.column = new Array(n * n).fill(0);
        this.diag1 = new Array(n * n).fill(0);
        this.diag2 = new Array(n * n).fill(0)

        this.count = 0;

        this.search(0);

        return this.count;
    }
}

const backtracking = new Backtracking();
console.log(backtracking.solve(8));
