// https://binarysearch.com/problems/Cell-Fusion
class CellFusion {
    static solve(cells) {
        let multiSet = new Map();
        cells.forEach(cel => multiSet.set(cel, (multiSet.get(cel) || 0) + 1));

        let sortKey = [...multiSet.keys()].sort((a, b) => b - a);

        while (multiSet.get(sortKey[0]) > 1 || sortKey.length > 1) {
            let max = sortKey[0];
            let prevMax = sortKey[1];

            if (multiSet.get(max) > 1) {
                let newSize = multiSet.get(max) - 2;
                if (newSize < 1) {
                    multiSet.delete(max);
                    sortKey.shift();
                } else multiSet.set(max, newSize);
            } else {
                let newItem = Math.floor((max + prevMax) / 3);
                multiSet.set(newItem, (multiSet.get(newItem) || 0) + 1);
                multiSet.get(max) > 1 ? multiSet.set(max, multiSet.get(max) - 1) : multiSet.delete(max);
                multiSet.get(prevMax) > 1 ? multiSet.set(prevMax, multiSet.get(prevMax) - 1) : multiSet.delete(prevMax);
                sortKey = [...multiSet.keys()].sort((a, b) => b - a);
            }
        }

        return sortKey.length ? sortKey[0] : -1;
    }
}

class CellFusion1 {
    static solve(cells) {
        let cellsHeap = new Map();
        cells.forEach(cel => cellsHeap.set(cel, (cellsHeap.get(cel) || 0) + 1));
        cells = [cells.keys()].sort((a, b) => a - b);


        return cells;
    }
}

console.log(CellFusion1.solve([10, 30, 30, 20]));
console.log(CellFusion1.solve([3, 3, 3, 4]));
console.log(CellFusion1.solve([1, 1, 1]));
