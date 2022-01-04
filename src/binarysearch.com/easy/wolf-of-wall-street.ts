//https://binarysearch.com/problems/Wolf-of-Wall-Street
class WolfOfWallStreet {
  static solve(prices: Array<number>): any {
      let profit = 0;
      let min = Infinity;

      prices.forEach(price => {
          min = Math.min(price, min);

          profit = Math.max(profit, price - min);
      })

      return profit;
  }
}

console.log(WolfOfWallStreet.solve([1, 0]) == 0);
console.log(WolfOfWallStreet.solve([1, 1]) == 0);
console.log(WolfOfWallStreet.solve([1, 2, 0, 0]) == 1);
console.log(WolfOfWallStreet.solve([9,11,8,5,7,10]) == 5);
console.log(WolfOfWallStreet.solve([2, 0, 3, 0]) == 3);
console.log(WolfOfWallStreet.solve([3, 1, 2, 0]) == 1);
