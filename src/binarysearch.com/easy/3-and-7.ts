//https://binarysearch.com/problems/3-and-7
class ThreeAndSeven {
    static solve(n) {
        return n > 11 || n % 3 == 0 || n % 7 == 0;
    }
}

console.log(ThreeAndSeven.solve(2) == false);
console.log(ThreeAndSeven.solve(4) == false );
console.log(ThreeAndSeven.solve(9) == true);
console.log(ThreeAndSeven.solve(11) == false);
console.log(ThreeAndSeven.solve(13) == true);
console.log(ThreeAndSeven.solve(5653) == true);
console.log(ThreeAndSeven.solve(7056) == true);
