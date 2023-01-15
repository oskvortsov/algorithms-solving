// https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3 || arr[0] > arr[1]) return false;

    let strictIncrease =  true;
    let strictDecrease = true;

    for (let i = 0; i < arr.length - 1; i++) {
        let next = i + 1;

        if (arr[i] == arr[next]) return false;

        if (strictIncrease) {
            if (arr[i] < arr[next]) continue;
            strictIncrease = false;
        }

        if (strictDecrease) {
            if (arr[i] > arr[next]) continue;
            strictDecrease = false;
        }

        return false;
    }

    return !strictIncrease && strictDecrease;
}

describe('Valid Mountain Array', () => {
    it('case 1', () => expect(validMountainArray([2,1])).toBeFalsy())
    it('case 2', () => expect(validMountainArray([3,5,5])).toBeFalsy())
    it('case 3', () => expect(validMountainArray([0,3,2,1])).toBeTruthy())
    it('case 4', () => expect(validMountainArray([0,1,2,3,4,5,6,7,8,9])).toBeFalsy())
})
