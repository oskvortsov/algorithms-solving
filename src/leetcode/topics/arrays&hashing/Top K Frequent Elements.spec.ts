// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    const counts = {};

    for (let num of nums){
        if (!(num in counts)) counts[num] = 0;
        counts[num]++;
    }

    let buffer: number[][] = [];

    for (const num in counts) {
        let countValue = counts[num];

        if (!buffer[countValue]) {
            buffer[countValue] = [];
        }

        buffer[countValue].push(+num);
    }

    let answer = [];

    for (let i = buffer.length - 1; i > 0; i--) {
        if (!buffer[i]) continue;

        for (let num of buffer[i]) {
            answer.push(num);

            if (answer.length == k) {
                return answer;
            }
        }

    }
}

// first attemp use map and set
function topKFrequent1(nums: number[], k: number): number[] {
    let counts = {};
    for (let num of nums) {
        if (!(num in counts)) counts[num] = 0;
        counts[num]++;
    }

    let map = new Map();
    let uniqCount = [];
    for (let count in counts) {
        const key = counts[count];

        if (!map.has(key)) {
            map.set(key, []);
            uniqCount.push(key);
        }

        map.get(key).push(+count);
    }
    uniqCount.sort((a, b) => b - a);

    const answer = [];

    while (answer.length !== k) {
        let maxVal = uniqCount[0];

        if (map.get(maxVal).length) {
             answer.push(map.get(maxVal).shift())
        } else {
            uniqCount.shift();
            map.delete(maxVal);
        }
    }


    return answer;
}

describe('Top K Frequent Elements', () => {
    it('case 1', () => {
        expect(topKFrequent([1,1,1,2,2,3], 2)).toStrictEqual([1, 2]);
    })

    it('case 1', () => {
        expect(topKFrequent([1, 1, 2, 3, 3, 4, 4, 5, 3, 2, 2], 3)).toStrictEqual([2, 3, 1]);
    })

    it('case 2', () => {
        expect(topKFrequent([1], 1)).toStrictEqual([1]);
    })

    it('case 3', () => {
        expect(topKFrequent([5,3,1,1,1,3,73,1], 2)).toStrictEqual([1, 3])
    })
})

