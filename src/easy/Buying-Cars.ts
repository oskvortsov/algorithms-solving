// https://binarysearch.com/problems/Buying-Cars

class BuyingCars {
    static solve(prices, k) {
        let count = 0;
        prices = prices.sort((a, b) => a - b);

        for (let i = 0; i < prices.length; i++) {
            k -= prices[i];

            if (k < 0) {
                break;
            }
            count++;
        }

        return count;
    }
}

console.log(BuyingCars.solve([60, 90, 55, 75], 90));
