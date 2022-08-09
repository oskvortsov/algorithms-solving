// https://leetcode.com/problems/car-fleet/

function carFleetSpec(target: number, position: number[], speed: number[]): number {

}


describe('carFleet', () => {
    it('case 1', () => {
        expect(carFleetSpec(12, [10,8,0,5,3], [2,4,1,1,3])).toBe(3);
    })

    it('case 2', () => {
        expect(carFleetSpec(10, [3], [3])).toBe(1);
    })

    it('case 3', () => {
        expect(carFleetSpec(100, [0, 2, 4], [4, 2, 1]));
    })
})
