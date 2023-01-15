// https://leetcode.com/problems/min-cost-climbing-stairs/

/*

You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
 */

/*

case 1 -> 10, *15*, 20 => 15
dp[0] = 10, dp[1] = 15
dp[0] = 10 + (15, 20), dp[1] = 15 + (20, 0)
dp[0] = 10 + 15, dp[1] = 15

case 2 -> *1*, 100, *1*, 1, *1*, 100, *1*, *1*, 100, *1* => 6
dp[0] = 1, dp[1] = 100
dp[0] = 1 + (100, 1), dp[1] = 100 + (1, 1)
dp[0] = 1 + 1 + (1, 1), dp[1] = 100 + 1 + (1, 100)
dp[0] = 1 + 1 + 1 + (100, 1) dp[1] = 100 + 1 + 1 + (100, 1)
dp[0] = 1 + 1 + 1 + 1 + (1, 100) dp[1] = 100 + 1 + 1 + 1 + 1 + (100, 1)
dp[0] = 1 + 1 + 1 + 1 + 1 + (100, 1) dp[1] = 100 + 1 + 1 + 1 + 1 + 1
dp[0] = 1 + 1 + 1 + 1 + 1 + 1 => 6 dp[1] = 100 + 1 + 1 + 1 + 1 + 1 => 105


case 3 [0,1,2,2]

 */


function minCostClimbingStairs(cost: number[]): number {
    const size = cost.length;
    let first = 0;
    let second = 1;
    let dp = [cost[first], cost[second]];

    while (first < size || second < size) {
        if (first < size) {
            first += (cost[first + 2] || 0) <= cost[first + 1] ? 2 : 1;
            dp[0] += (cost[first] || 0);
        }

        if (second < size) {
            second += (cost[second + 2] || 0) <= cost[second + 1] ? 2 : 1;
            dp[1] += (cost[second] || 0);
        }
    }

    return Math.min(dp[0], dp[1]);
}

describe('Min Cost Climbing Stairs', () => {
    it ('case 1', () => {
        expect(minCostClimbingStairs([10,15,20])).toBe(15);
    })

    it('case 2', () => {
        expect(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).toBe(6);
    })

    it('case 3', () => {
        expect(minCostClimbingStairs([0,1,2,2])).toBe(2)
    });
})
