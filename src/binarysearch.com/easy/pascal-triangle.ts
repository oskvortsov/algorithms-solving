// https://binarysearch.com/problems/Pascal's-Triangle

class PascalTriangle {
  static solve(n) {
      const table = [1];

      while(n--) {
          for (let i = table.length - 1; i > 0; i--) table[i] += table[i - 1];
          table.push(1);
      }

      return table;
  }
}

class PascalTriangle1 {
    static solve(n) {
        let index = 1;
        let temp = [1];

        while (index <= n) {
            index++;
            temp = PascalTriangle1.getRow(temp, index);
        }

        return temp;
    }

    static getRow(prev, n) {
        let temp = new Array(n);

        for (let i = 0; i < n / 2; i++) {
            let val = (prev[i - 1] | 0) + (prev[i] | 0);
            temp[i] = val;
            temp[n - (i + 1)] = val;
        }

        return temp;
    }
}

function arrayEqual(arr1, arr2) {
  return arr1.every((item, index) => item === arr2[index]);
}

console.log(arrayEqual(PascalTriangle.solve(3), [1, 3, 3, 1]));
console.log(arrayEqual(PascalTriangle1.solve(3), [1, 3, 3, 1]));
