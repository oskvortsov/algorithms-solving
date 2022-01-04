//https://binarysearch.com/problems/Sum-of-Two-Numbers-Online-Version
class TwoSum {
    private data: Record<number, number>;

    constructor() {
        this.data = {};
    }

    add(val) {
        if (val in this.data) {
            this.data[val]++;
        } else {
            this.data[val] = 1;
        }
    }

    find(val) {
        for (let i in this.data) {
            let dif = val - +i;
            if (+i == dif ? this.data[i] > 1 : dif in this.data) {
                return true
            }
        }

        return false;
    }
}

const obj = new TwoSum();
// obj.add(6);
// obj.add(4);
// obj.add(6);
obj.find(8);
console.log(obj.find(8));
