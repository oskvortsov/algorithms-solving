// https://leetcode.com/problems/lru-cache/
import { DoubleLinkedList } from '../../../data_structure/linked-list/DoubleLinkedList';

class LRUCacheNode {
    key: number;
    value: number;
    next: LRUCacheNode | null;
    prev: LRUCacheNode | null;

    constructor(key: number, value: number, next: LRUCacheNode = null, prev: LRUCacheNode = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = null;
    }
}


// The idea use space between two LLNode front -> [] -> [] -> tail and save in map node instead just value
// it's improve speed to find node
export class LRUCache {
    private readonly capacity: number;
    private readonly front: LRUCacheNode;
    private readonly tail: LRUCacheNode;
    private map: Map<number, LRUCacheNode>;
    private size = 0;

    constructor(capacity = 1) {
        this.capacity = capacity;
        this.map = new Map();
        this.size = 0;
        this.front = new LRUCacheNode(null, null);
        this.tail = new LRUCacheNode(null, null);

        this.front.next = this.tail;
        this.tail.prev = this.front;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this.changeRecently(node);
            return node.value;
        }

        return -1;
    }

    put(key: number, value: number) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;

            this.changeRecently(node);
        } else {
            const node = new LRUCacheNode(key, value);

            this.size++;

            if (this.size > this.capacity) {
                debugger;
                const tail = this.popTail();
                this.removedNode(tail);
                this.map.delete(tail.key);
                this.size--;
                debugger;
            }

            this.addNode(node);
            this.map.set(key, node);
        }

        return null;
    }

    private changeRecently(node: LRUCacheNode) {
        if (node.prev == this.front) return;

        this.removedNode(node);
        this.addNode(node);

    }

    private removedNode(node: LRUCacheNode) {
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    private popTail(): LRUCacheNode {
        const node = this.tail.prev;
        this.removedNode(node);

        return node;
    }

    private addNode(node: LRUCacheNode) {
        node.prev = this.front;
        node.next = this.front.next;

        this.front.next.prev = node;
        this.front.next = node;
    }

}


// export class LRUCache {
//     private capacity: number;
//     private list: LRUCacheNode;
//     private tail: LRUCacheNode;
//     private map: Map<number, number>;
//     private size = 0;
//
//     constructor(capacity = 1) {
//         this.capacity = capacity;
//         this.map = new Map();
//         this.size = 0;
//         this.list = null;
//     }
//
//     get(key: number): number {
//         if (this.map.has(key)) {
//             this.changeRecently(key);
//             return this.map.get(key);
//         }
//
//         return -1;
//     }
//
//     put(key: number, value: number) {
//         if (this.map.has(key)) {
//             this.map.set(key, value);
//             this.changeRecently(key);
//         } else {
//             this.size++;
//
//             if (this.size > this.capacity) {
//                 let removedKey = this.removeLast();
//                 this.map.delete(removedKey);
//             }
//
//             this.map.set(key, value);
//             this.putToList(key);
//         }
//
//         return null;
//     }
//
//     private putToList(key: number) {
//         const node = new LRUCacheNode(key, this.list, null);
//
//         if (!this.list) {
//             this.list = this.tail = node;
//         } else {
//             this.list.prev = node;
//             this.list = node;
//         }
//     }
//
//
//     private changeRecently(key: number): void {
//         let node = this.list;
//
//         while (node) {
//             if (node.value == key) break;
//             node = node.next;
//         }
//
//         if (!node) return;
//
//         if (node.prev == null) return;
//
//         if (this.tail == node) {
//             this.tail = node.prev;
//             node.prev.next = null;
//         } else {
//             node.prev.next = node.next;
//             node.next.prev = node.prev;
//         }
//
//         node.next = this.list;
//         node.prev = null;
//
//         this.list.prev = node;
//         this.list = node;
//     }
//
//     private removeLast(): number {
//         const node = this.tail;
//
//         if (node.prev == null) {
//             this.list = null;
//             this.tail = null;
//         } else {
//             this.tail = node.prev;
//             this.tail.next = null;
//         }
//
//         return node.value;
//     }
// }

describe('LRU cache', () => {
    it('case 1:', () => {
        const instance = new LRUCache(2);
        const methods = ["put", "put", "get", "put", "get", "put", "get", "get", "get"];
        const parameters = [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
        const results = [null, null, 1, null, -1, null, -1, 3, 4];

        for (let i = 0; i < methods.length; i++) {
            expect(results[i]).toBe(instance[methods[i]](...parameters[i]));
        }
    })

    it('case 2:', () => {
        const instance = new LRUCache(2);
        const methods = ["get","put","get","put","put","get","get"];
        const parameters = [[2],[2,6],[1],[1,5],[1,2],[1],[2]];
        const results = [-1,null,-1,null,null,2,6];

        for (let i = 0; i < methods.length; i++) {
            expect(results[i]).toBe(instance[methods[i]](...parameters[i]));
        }
    })
})
