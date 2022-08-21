// https://leetcode.com/problems/longest-consecutive-sequence/

class UnionFind {
    private sizes: number[];
    private ids: number[];

    constructor(size: number) {
        this.sizes = new Array(size).fill(1);
        this.ids = new Array(size).fill(null).map((_,index) => index);
    }

    find(path: number): number {
        let root = path;

        while (this.ids[root] !== root) {
            root = this.ids[root];
        }

        while (path !== root) {
            let next = this.ids[path];
            this.ids[path] = root;
            path = next;
        }

        return root;
    }

    union(p: number, q: number) {
        if (this.connected(p, q)) return;

        let root1 = this.find(p);
        let root2 = this.find(q);

        if (this.sizes[root1] < this.sizes[root2]) {
            this.ids[root1] = root2;
            this.sizes[root2] += this.sizes[root1];
            this.sizes[root1] = 0;
        } else {
            this.ids[root2] = root1;
            this.sizes[root1] += this.sizes[root2];
            this.sizes[root2] = 0;
        }
    }

    get maxSize() {
        return Math.max(...this.sizes);
    }

    private connected(p: number, q: number) {
        return this.find(p) == this.find(q);
    }
}

// using union find class
function longestConsecutive1(nums: number[]): number {
    if (!nums.length) return 0;

    let map = new Map();
    nums.forEach((num, index) => map.set(num, index));
    let unionFind = new UnionFind(nums.length);

    for (let num of nums) {
        let parent = num - 1;

        if (map.has(parent)) {
            unionFind.union(
                map.get(parent),
                map.get(num)
            )
        }
    }

    return unionFind.maxSize;
}

function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let longestStrike = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStrike = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStrike++;
            }

            longestStrike = Math.max(longestStrike, currentStrike);
        }
    }

    return longestStrike;
}

describe('Longest Consecutive Sequence', () => {
    it('case 1', () => {
        expect(longestConsecutive([100,4,200,1,3,2])).toBe(4);
    })

    it('case 2', () => {
        expect(longestConsecutive([0,3,7,2,5,8,4,6,0,1])).toBe(9);
    })

    it('case 3', () => {
        expect(longestConsecutive([])).toBe(0);
    })

    it('case 4', () => {
        expect(longestConsecutive([1])).toBe(1);
    })

    it('case 5', () => {
        expect(longestConsecutive([1, 2, 4])).toBe(2);
    })

    it('case 6', () => {
        expect(longestConsecutive([0, -1])).toBe(2);
    })

    it('case 7', () => {
        expect(longestConsecutive([0, 0, 0, 0, 1])).toBe(2);
    })
})
