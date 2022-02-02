// https://binarysearch.com/problems/Leaderboard
class Leaderboard {
    static solve(nums) {
        let temp = [];
        let setPlaces = new Set();
        let objMap = new Map();

        for (let i of nums) setPlaces.add(i);

        temp = temp.sort((a: number, b: number) => b - a);
        temp.forEach((val, place) => objMap.set(val, place));

        return nums.map(i => objMap.get(i));
    }
}

console.log(Leaderboard.solve([50, 30, 50, 90, 10]), [1, 2, 1, 0, 3]);
