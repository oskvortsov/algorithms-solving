// https://binarysearch.com/problems/Selling-Products
class SellingProducts {
    static solve(items: Array<number>, n: number): number {
        let hashItems = {};

        items.forEach(i => {
            if (!(i in hashItems)) {
                hashItems[i] = 0;
            }

            hashItems[i]++;
        });



        return 1;
    }
}

SellingProducts.solve([2, 3, 1, 1, 1, 0, 0], 2);
