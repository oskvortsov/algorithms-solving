/***

    Generating subsets

    We first consider the problem of generating all subsets of a set of n elements. For
    example, the subsets of {0,1,2} are ;, {0}, {1}, {2}, {0,1}, {0,2}, {1,2} and {0,1,2}.
    There are two common methods to generate subsets: we can either perform a
    recursive search or exploit the bit representation of integers.

 ***/

// Recursive search
class GeneratingSubsetsMethod1 {
    private count = 0;
    private n = 0;
    private data: Array<Number> = [];

    private search(k: number) {
        if (k == this.n) {
            console.log(this.data);
            this.count++;
        } else {
            this.search(k + 1);
            this.data.push(k);

            this.search(k + 1);
            this.data.pop();
        }
    }

    public getNumberOfSubsets(n: number) {
        this.n = n;

        this.search(0);

        return this.count;
    }
}

const GSMmethod1 = new GeneratingSubsetsMethod1();
console.log('Method1: By recursion')
console.log('Answer:', GSMmethod1.getNumberOfSubsets(3));

console.log(''.padStart(30, '-'));

// Bits representing
class GeneratingSubsetsMethod2 {
    public getNumberOfSubsets(n: number) {
        let count = 0;

        for (let b = 0; b < (1 << n); b++) {
            let subset = [];

            for (let i = 0; i < n; i++) {
                if (b & (1 << i)) subset.push(i);
            }

            console.log(subset);
            count++;
        }

        return count;
    }
}

const GSMmethod2 = new GeneratingSubsetsMethod2();
console.log('Method2: Bit representation')
console.log('Answer:', GSMmethod2.getNumberOfSubsets(3));
