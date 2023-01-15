// https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/



// aproach 1
function duplicateZeros1(arr: number[]): void {
    let buffer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) buffer.push(0);

        if (buffer.length) {
            buffer.push(arr[i]);
            arr[i] = buffer.shift();
        }
    }
}

function duplicateZeros(arr: number[]): void {
    let duplicates = 0;
    let length = arr.length - 1;

    for (let i = 0; i <= length - duplicates; i++) {
        if (arr[i] === 0) {
            if (i == length - duplicates) {
                arr[length--] = 0;
                break;
            }
            duplicates++;
        }
    }

    let last = length - duplicates;

    for (let i = last; i > -1; i--) {
        if (arr[i] == 0) {
            arr[i + duplicates--] = 0;
            arr[i + duplicates] = 0;
        } else {
            arr[i + duplicates] = arr[i];
        }
    }
}



describe('Duplicate Zeros', () => {
    it('case 1', () => {
        const input = [1,0,2,3,0,4,5,0];
        duplicateZeros(input);

        expect(input).toEqual([1,0,0,2,3,0,0,4]);
    })

    it('case 2', () => {
        const input = [1,2,3];
        duplicateZeros(input);

        expect(input).toEqual([1,2,3]);
    })

    it('case 2', () => {
        const input = [0, 0, 1, 2, 3];
        duplicateZeros(input);

        expect(input).toEqual([0, 0, 0, 0 ,1]);
    })

    it('case 3', () => {
        const input = [8,4,5,0,0,0,0,7];
        duplicateZeros(input);

        expect(input).toEqual([8,4,5,0,0,0,0,0]);
    })
})
