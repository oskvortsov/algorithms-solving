// https://binarysearch.com/problems/K-Longest-Show-Durations

class KLongestShowDurations {
    static solve(shows, durations, k) {
        let common = new Map();

        for (let i = 0; i < shows.length; i++) {
            common.set(shows[i], (common.get(shows[i]) | 0) + durations[i]);
        }

        let tops = [...common.values()].sort((a, b) => b - a);

        let result = 0;

        for (let i = 0; i < k; i++) {
            result += tops[i];
        }

        return result;
    }
}


console.log(KLongestShowDurations.solve(["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"], [5, 3, 5, 13, 4], 2))
