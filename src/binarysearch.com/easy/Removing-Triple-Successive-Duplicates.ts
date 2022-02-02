// https://binarysearch.com/problems/Removing-Triple-Successive-Duplicates
class RemovingTripleSuccessiveDuplicates {
    static solve(s) {
       if (!s.length) return 0;

       let prev = s[0];
       let count = 0;
       let res = 0;

       for (let i = 0; i <= s.length; i++) {
           if (prev != s[i]){
               res += Math.trunc(count / 3);
               count = 1;
           } else count++;

           prev = s[i];
       }

       return res;
    }
}

console.log(RemovingTripleSuccessiveDuplicates.solve("1100011"))
console.log(RemovingTripleSuccessiveDuplicates.solve("111"))
