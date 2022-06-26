// https://binarysearch.com/problems/Light-Bulb-Toggling

/**
 *
 * Intuition
 * How many ever switches there are in the room, we can observe that one fact will always be true:
 *
 * If a switch was toggled an even number of times, it will be off. Whereas, if it was toggled an odd number of times, it will be on.
 * The problem therefore reduces to counting the number of switches which were toggled an odd number of times.
 *
 * A switch s will be toggled by person p if s % p == 0 or in other words, s is divisible by p.
 *
 * So, a switch will be toggled an odd number of times, if it has an odd number of factors.
 *
 * This implies we need to count the switches which have an odd number of factors.
 *
 * For every number, it is definitely divisible by 1 and itself, so barring switch 1, every other switch has atleast two factors. Let's take an example. Suppose there were 9 switches in the room. What are the factors of each of those 9 numbers?
 *
 * 1 : 1
 * 2 : 1, 2
 * 3 : 1, 3
 * 4 : 1, 2, 4
 * 5 : 1, 5
 * 6 : 1, 2, 3, 6
 * 7 : 1, 7
 * 8 : 1, 2, 4, 8
 * 9 : 1, 3, 9
 * Do you see a pattern above? All numbers that are perfect squares have an odd number of factors.
 *
 * Therefore, we just need to count the number of perfect squares in the range [1, n][1,n]
 *
 * Note that there are sqrt(n) squares in the range [1, n][1,n]. Thus, this is our solution.
 *
 */

class LightBulbToggling {
    static solve(n) {
        return Math.trunc(Math.sqrt(n));
    }
}

console.log(LightBulbToggling.solve(4), 2);
