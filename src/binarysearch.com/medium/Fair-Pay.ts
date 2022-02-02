// https://binarysearch.com/problems/Fair-Pay
class FairPay {
    static solve(ratings) {
        let dollars = new Array(ratings.length).fill(1);

        if (ratings.length > 1) {
            for (let i = 1; i < ratings.length; i++) {
                if (ratings[i - 1] < ratings[i] && dollars[i] <= dollars[i - 1]) {
                    dollars[i] += dollars[i - 1] - dollars[i] + 1;
                }
            }


            for (let i = ratings.length - 1; i > 0; i--) {
                if (ratings[i] < ratings[i - 1] && dollars[i] >= dollars[i - 1]) {
                    dollars[i - 1] += dollars[i] - dollars[i - 1] + 1;
                }
            }
        }

        return dollars.reduce((acc, i) => acc + i);
    }
}

console.log(FairPay.solve([1, 2, 5, 1]), 7);
console.log(FairPay.solve([2, 3, 1]), 4);
console.log(FairPay.solve([2, 1]), 3);
console.log(FairPay.solve([1, 3, 2, 1]), 7);
