// https://binarysearch.com/problems/Monotonous-String-Groups
class MonotonousStringGroups {
    static solve(s) {
       let count = 0;

       for (let i = 0; i < s.length;) {
           let j = i + 1;
           count++;

           let noninc = true;
           let nondec = true;

           while (j < s.length) {
               if (s[j] > s[j - 1]) noninc = false;
               if (s[j] < s[j - 1]) nondec = false;

               if (!noninc && !nondec) break;
               j++;
           }
           i = j;
       }

       return count;
    }
}

//
// console.log(MonotonousStringGroups.solve('dcda'), 2);
// console.log(MonotonousStringGroups.solve('abcdcba'), 2);
// console.log(MonotonousStringGroups.solve('zzz'), 1);
console.log(MonotonousStringGroups.solve('bba'), 1);
// console.log(MonotonousStringGroups.solve('bbc'), 1);
// console.log(MonotonousStringGroups.solve('bca'), 2);
