export class UnionFind {
    // id contains id of root, if id[i] == i then id[i] is a root
    private id: number[];

    // the size of each component
    private sz: number[];

    // the size of elements
    private _size;

    // the number of components in union type
    private _numberOfComponents: number;

    constructor(size: number) {
        if (size <= 0) throw new Error('Size should be more than 0');

        this._size = this._numberOfComponents = size;

        // default each node have size equal 1
        this.sz = new Array(size).fill(1);

        // by default each element link to itself
        this.id = new Array(size).fill(null).map((_, i) => i);
    }

    find(path: number): number {
        // find the root
        let root = path;
        while (this.id[root] !== root) {
            root = this.id[root];
        }

        // Compress the path leading back to the root
        while (path !== root) {
            let next = this.id[path];
            this.id[path] = root;
            path = next;
        }

        return root;
    }

    connected(p: number, q: number): boolean {
        return this.find(p) == this.find(q);
    }

    componentSize(p: number): number {
        return this.sz[this.find(p)]
    }

    size(): number {
        return this._size;
    }

    get components(): number {
        return this._numberOfComponents;
    }

    unify(p: number, q: number): void {
        if (this.connected(p, q)) return;

        let root1 = this.find(p);
        let root2 = this.find(q);

        if (this.sz[root1] > this.sz[root2]) {
            this.id[root2] = root1;
            this.sz[root1] += this.sz[root2];
            this.sz[root2] = 0;
        } else {
            this.id[root1] = root2;
            this.sz[root2] += this.sz[root1];
            this.sz[root1] = 0;
        }

        this._numberOfComponents--;
    }
}
