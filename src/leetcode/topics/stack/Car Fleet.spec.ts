// https://leetcode.com/problems/car-fleet/

function carFleetSpec(target: number, position: number[], speed: number[]): number {
    const items = position.map((pos, i) => ({ pos, spd: speed[i] }));
    items.sort((a, b) => b.pos - a.pos);

    const times = []

    items.forEach(({pos, spd}, i) => {
        let time = (target - pos) / spd;
        if (i == 0 || times[times.length - 1] < time) {
            times.push(time);
        }
    })

    return times.length;
}


describe('carFleet', () => {
    it('case 1', () => {
        expect(carFleetSpec(12, [10,8,0,5,3], [2,4,1,1,3])).toBe(3);
    })

    it('case 2', () => {
        expect(carFleetSpec(10, [3], [3])).toBe(1);
    })

    it('case 3', () => {
        expect(carFleetSpec(100, [0, 2, 4], [4, 2, 1])).toBe(1);
    })

    it('case 4', () => {
        expect(carFleetSpec(10, [0, 4, 2], [2, 1, 3])).toBe(1);
    })

    it('case 5', () => {
        expect(carFleetSpec(10, [8,3,7,4,6,5], [4,4,4,4,4,4])).toBe(6);
    })

    it('case 6', () => {
        expect(carFleetSpec(31, [5,26,18,25,29,21,22,12,19,6], [7,6,6,4,3,4,9,7,6,4])).toBe(6);
    })
})
