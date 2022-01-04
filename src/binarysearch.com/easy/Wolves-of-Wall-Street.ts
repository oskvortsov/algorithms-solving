// https://binarysearch.com/problems/Wolves-of-Wall-Street

class WolvesOfWallStreet {
    static solve(prices) {
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            let sum = prices[i] - prices[i - 1];
            if (sum > 0) profit += sum;
        }

        return profit;
    }
}

class WolvesOfWallStreet1 {
    static solve(prices) {
        let profit = 0;
        let prev = prices[0];
        let min = Infinity;

        for (let i = 0; i <= prices.length; i++) {
            if (prev > (prices[i] || 0)) {
                profit += prev - min;
                min = Infinity;
            }

            prev = prices[i];
            min = Math.min(min, prices[i]);
        }

        return profit;
    }
}

console.log(WolvesOfWallStreet.solve([1, 5, 3, 4, 6]));
