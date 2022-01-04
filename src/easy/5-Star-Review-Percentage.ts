//https://binarysearch.com/problems/5-Star-Review-Percentage
class StarReviewPercentage {
  static solve(reviews, threshold) {
    const [totalFive, totalRew] = reviews.reduce(
      (acc, val) => {
        acc[0] += val[0];
        acc[1] += val[1];

        return acc;
      },
      [0, 0],
    );

    if ((totalFive / totalRew) * 100 >= threshold) {
      return 0;
    }

    return Math.ceil(
      (threshold * totalRew - 100 * totalFive) / (100 - threshold),
    );
  }
}

console.log(StarReviewPercentage.solve([[10, 20]], 50) == 0);
console.log(
  StarReviewPercentage.solve(
    [
      [4, 4],
      [1, 2],
      [3, 6],
    ],
    77,
  ) == 6,
);
