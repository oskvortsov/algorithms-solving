function maxProfit(prices: number[]): number {
  let sell = prices[0];
  let profit = 0;

  for (let price of prices) {
    if (sell < price) {
      profit = Math.max(price - sell, profit);
    }

    sell = Math.min(price, sell);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 7);
console.log(maxProfit([1, 2, 3, 4, 5]), 4);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
