// https://leetcode.com/problems/koko-eating-bananas/

function enoughForEatAll(k: number, h: number, piles: number[]) {
    let index = 0;

    while (index < piles.length) {
        if (h < 0) return false;

        h -= Math.ceil(piles[index++] / k);
    }

    return h >= 0;
}

function minEatingSpeed(piles: number[], h: number): number {
    let L = 1;
    let R = Math.max(...piles);
    let min = R;

    while (L <= R) {
        let mid = R - ~~((R - L) / 2);

        if (enoughForEatAll(mid, h, piles)) {
            R = mid - 1;
            min = Math.min(mid, min);
        } else {
            L = mid + 1;
        }
    }

    return min;
}

describe('Koko Eating Bananas', () => {
    it('case 1 ', () => {
        expect(minEatingSpeed([3,6,7,11], 8)).toBe(4);
    })

    it('case 2', () => {
        expect(minEatingSpeed([30,11,23,4,20], 5)).toBe(30);
    })

    it('case 3', () => {
        expect(minEatingSpeed([30,11,23,4,20], 6)).toBe(23);
    })

    it('case 4', () => {
        expect(minEatingSpeed([312884470], 312884469)).toBe(2);
    })
})
