// https://leetcode.com/problems/triangle/

function minimumTotal(triangle: number[][]): number {
  if (triangle.length < 2) return Math.min(...triangle[0]);

  const size = triangle.length - 1;
  const dp = triangle[size];
  const step = new Array(triangle.length).fill(0).map((_, i) => i)

  for (let i = size - 1; i > -1; i--) {
    let row = triangle[i];
    let rowSize = row.length - 1;

    for (let j = 0; j < dp.length; j++) {
       if (j == 0) {
           dp[j] += row[j];
       } else if (j >= rowSize) {
           step[j] = rowSize;
           dp[j] += row[rowSize];
       } else {
           let index = Math.min(j, step[j]);
           index = row[index - 1] < row[index] ? index - 1 : index;

           step[j] = index;
           dp[j] += row[index];
       }
    }
  }

  return Math.min(...dp);
}

describe('Triangle', () => {
  it('case 1', () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
  });

  it('case 2', () => {
    expect(minimumTotal([[-10]])).toBe(-10);
  });

  it('case 3', () => {
    expect(minimumTotal([[-1],[2,3],[1,-1,-3]])).toBe(-1);
  });

  it('case 4', () => {
    expect(
      minimumTotal([
        [-7],
        [-2, 1],
        [-5, -5, 9],
        [-4, -5, 4, 4],
        [-6, -6, 2, -1, -5],
        [3, 7, 8, -3, 7, -9],
        [-9, -1, -9, 6, 9, 0, 7],
        [-7, 0, -6, -8, 7, 1, -4, 9],
        [-3, 2, -6, -9, -7, -6, -9, 4, 0],
        [-8, -6, -3, -9, -2, -6, 7, -5, 0, 7],
        [-9, -1, -2, 4, -2, 4, 4, -1, 2, -5, 5],
        [1, 1, -6, 1, -2, -4, 4, -2, 6, -6, 0, 6],
        [-3, -3, -6, -2, -6, -2, 7, -9, -5, -7, -5, 5, 1],
      ]),
    ).toBe(-63);
  });
});
