//https://binarysearch.com/problems/Index-Into-an-Infinite-String
class IndexIntoAnInfiniteString {
    solve(s: string, i: number, j: number): string {
        const size  = s.length;
        const diff  = i % size + j - i;

        s += s.repeat(diff / size);

        return s.substring(i % size, diff);
    }
}
