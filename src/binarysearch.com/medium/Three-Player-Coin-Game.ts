// https://binarysearch.com/problems/Three-Player-Coin-Game
class ThreePlayerCoinGame {
    static solve(piles) {
        piles = piles.sort((a, b) => a - b);
        let res = 0;
        let R = piles.length;

        while (piles.length / 3 < R) {
            res += piles[R -= 2];
        }

        return res;
    }
}

console.log(ThreePlayerCoinGame.solve([2, 4, 1, 3, 5, 6]))
console.log(ThreePlayerCoinGame.solve([0, 4, 8]))
