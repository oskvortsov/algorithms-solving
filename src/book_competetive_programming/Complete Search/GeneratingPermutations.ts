/***

    Generating permutations

    Next we consider the problem of generating all permutations of a set of n elements.
    For example, the permutations of {0,1,2} are (0,1,2), (0,2,1), (1,0,2), (1,2,0),
    (2,0,1) and (2,1,0). Again, there are two approaches: we can either use recursion
    or go through the permutations iteratively.

 ***/

//
class GeneratingPermutationsMethod1 {
  private permutation = [];
  private chosen = [];
  private n = 0;
  private count = 0;

  private search() {
    if (this.permutation.length == this.n) {
      console.log(this.permutation);
      this.count++;
    } else {
      for (let i = 0; i < this.n; i++) {
        if (this.chosen[i]) continue;

        this.chosen[i] = true;
        this.permutation.push(i);

        this.search();

        this.chosen[i] = false;
        this.permutation.pop();
      }
    }
  }

  public generating(n: number) {
    this.n = n;
    this.permutation = [];
    this.chosen = [];
    this.count = 0;

    this.search();

    return this.count;
  }
}

// @ts-ignore
const GPmethod1 = new GeneratingPermutationsMethod1();
console.log('Method 1: By recursion');
console.log('Count: ', GPmethod1.generating(3));
