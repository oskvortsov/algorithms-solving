class ShuffleAnArray {
    private nums = [];
    private original = [];

    constructor(nums: number[]) {
        this.original = nums;
        this.nums = [...nums];
    }

    reset(): number[] {
        this.nums = [...this.original];
        return this.nums;
    }

    shuffle(): number[] {
        const size = this.nums.length;

        for (let i = 0; i < 10; i++) {
            const first = Math.floor(Math.random() * size);
            const second = Math.floor(Math.random() * size);

            if (first !== second) {
                [this.nums[first], this.nums[second]] = [this.nums[second], this.nums[first]]
            }
        }

        return this.nums;
    }
}

class ShuffleAnArray1 {
    private nums = [];
    private original = [];

    constructor(nums: number[]) {
        this.original = nums;
        this.nums = [...nums];
    }

    reset(): number[] {
        this.nums = [...this.original];
        return this.nums;
    }

    shuffle(): number[] {
        const size = this.nums.length;

        for (let i = 0; i < size; i++) {
            const rnd = Math.floor(Math.random() * size);

            [this.nums[rnd], this.nums[i]] = [this.nums[i], this.nums[rnd]]
        }

        return this.nums;
    }
}

let testArr = [-6, 10, 184];
const newTest = new ShuffleAnArray(testArr);

for (let i = 0; i < 10; i++) {
    console.log(newTest.reset(), newTest.shuffle(), testArr, newTest.shuffle() == testArr);
}
