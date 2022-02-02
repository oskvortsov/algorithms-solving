// https://binarysearch.com/problems/Hamming-Distance
class HammingDistance {
    static solve(x,y) {
        let count = 0;

        while (x || y) {
            if ((x & 1) !== (y & 1)) count++;
            x >>= 1;
            y >>= 1;
        }

        return count;
    }
}


console.log(HammingDistance.solve(5, 9));
