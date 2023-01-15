// https://leetcode.com/explore/featured/card/fun-with-arrays/511/in-place-operations/3259/

function replaceElements(arr: number[]): number[] {
    const last = arr.length - 1;

    let max = arr[last];
    arr[last] = -1;

    if (last == 0) return arr;

    for (let i = last - 1; i > -1; i--) {
      let cur = arr[i];
      arr[i] = max;

      if (max < cur) max = cur;
    }

    return arr;
}

describe('Replace Elements with Greatest Element on Right Side', () => {
    it('case 1', () => expect(replaceElements([17,18,5,4,6,1])).toEqual([18,6,6,6,1,-1]));
    it('case 2', () => expect(replaceElements([400])).toEqual([-1]));
})
