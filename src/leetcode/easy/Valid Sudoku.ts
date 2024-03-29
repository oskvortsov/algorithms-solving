// https://leetcode.com/problems/valid-sudoku/
function isValidSudoku(board: string[][]): boolean {
  let rows = {};
  let columns = {};
  let squares = {};

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const char = board[i][j];
      const number = ~~(i / 3) * 3 + ~~(j / 3);

      if (!(j in rows)) rows[j] = new Set();
      if (!(i in columns)) columns[i] = new Set();
      if (!(number in squares)) squares[number] = new Set();

      if (char == '.') continue;

      if (
        rows[j].has(char) ||
        columns[i].has(char) ||
        squares[number].has(char)
      ) {
        return false;
      }

      rows[j].add(char);
      columns[i].add(char);
      squares[number].add(char);
    }
  }

  return true;
}

const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// isValidSudoku(board1);

const board2 = [
  ['.', '.', '5', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '1', '4', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '9', '2', '.', '.'],
  ['5', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '3', '.'],
  ['.', '.', '.', '5', '4', '.', '.', '.', '.'],
  ['3', '.', '.', '.', '.', '.', '4', '2', '.'],
  ['.', '.', '.', '2', '7', '.', '6', '.', '.'],
];
console.log(isValidSudoku(board2));
