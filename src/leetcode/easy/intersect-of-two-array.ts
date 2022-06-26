function intersect(nums1: number[], nums2: number[]): number[] {
   let obj = new Map<number, number>();

   for (const num of nums1) {
       if (!obj.has(num)) {
           obj.set(num, 0);
       }

       let val = obj.get(num);
       obj.set(num, val + 1);
   }

   let res = [];

   for (let num of nums2) {
       if (obj.has(num)) {
           res.push(num)

           let val = obj.get(num) - 1;
           val < 1 ? obj.delete(num) : obj.set(num, val);
       }
   }

   return res;
}

console.log(intersect([1, 2, 2], [2, 2, 4, 5]))
