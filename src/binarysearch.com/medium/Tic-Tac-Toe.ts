// https://binarysearch.com/problems/Tic-Tac-Toe
import { log } from 'util';


/**
 *
 *          r0 r1 r2   c0 c1 c2   d1 d2
 * ctns = [  0, 0, 0,   0, 0, 0,  0, 0 ]
 *         \ n rows / \ n cols / \ 2 diag /
 */
class TicTacToe {
    n = 0;
    table = [];


    constructor(n) {
        this.n = n;
        this.table = new Array(2 * n + 2).fill(0);
    }

    move(r, c, me) {
        const { n, table } = this;
        const player = me ? 1 : -1;

        table[r] += player;
        table[n + c] += player;

        let d1 = 2 * n;
        let d2 = 2 * n + 1;

        if (r == c) table[d1] += player;
        if (r == n - (c + 1)) table[d2] += player;

        let winVal = player * n;
        if (
            table[r] == winVal ||
            table[n + c] == winVal ||
            table[d1] == winVal ||
            table[d2] == winVal
        ) return player;

        return 0;
    }
}

class TicTacToe2 {
  n = 0;
  first = {
      row: {},
      col: {},
  };
  second = {
      row: {},
      col: {},
  };

  constructor(n) {
      this.n = n;
  }

  move(r, c, me) {
      let fields = me ? this.first : this.second;

      if (!(r in fields.row)) {
          fields.row[r] = new Set();
      }

      if (!(c in fields.col)) {
          fields.col[c] = new Set();
      }

      fields.row[r].add(c);
      fields.col[c].add(r);

      return this.checkWin(r, c, fields) ? me ? 1 : -1 : 0;
  }

  checkWin(r,c,fields) {
      if (fields.row[r].size == this.n || fields.col[c].size == this.n) {
          return true;
      }

      let rowSize = Object.keys(fields.row).length;
      let colSize = Object.keys(fields.col).length;

      if (rowSize != this.n || colSize !== this.n) {
          return false;
      }


      let dig_first = true;
      let dig_second = true;

      for (let i = 0; i < this.n; i++) {
        if (!dig_first && !dig_second) return false;

        if (!fields.row[i]?.has(this.n - (i + 1))) {
            dig_first = false;
        }

        if (!fields.row[i]?.has(i)) {
            dig_second = false;
        }
      }

      return dig_first || dig_second;
  }
}

class TicTacToe1 {
  filed = null;
  DIAGONALS_FIRST = [];
  DIAGONALS_SECOND = [];

  constructor(n) {
    this.initField(n);
  }

  move(r, c, me) {
    this.filed[r][c] = me;
    let isAnyWin = this.checkWin(r, c, me);

    if (!isAnyWin) return 0;

    return me ? 1 : -1;
  }

  checkWin(r, c, me) {
    if (
      this.DIAGONALS_FIRST.every(([dr, dc]) => this.filed[dr][dc] == me) ||
      this.DIAGONALS_SECOND.every(([dr, dc]) => this.filed[dr][dc] == me)
    ) {
      return true;
    }

    let isRowSame = true;
    let isColSame = true;

    for (let i = 0; i < this.filed.length; i++) {
      if (this.filed[i][c] !== me) {
        isRowSame = false;
      }

      if (this.filed[r][i] !== me) {
        isColSame = false;
      }
    }

    return isColSame || isRowSame;
  }

  initField(n) {
    this.filed = new Array(n).fill(null);

    for (let i = 0; i < n; i++) {
      this.filed[i] = new Array(n).fill(null);
      this.DIAGONALS_FIRST.push([i, i]);
      this.DIAGONALS_SECOND.push([i, n - (i + 1)]);
    }
  }
}

// let first_game = new TicTacToe(2);
// first_game.move(0, 1, true);
// first_game.move(1, 1, false);
// // console.log(first_game.move(1, 0, true));
//
//
// let second_game = new TicTacToe(3);
// [
//     [2,1,true],[0,2,false],[0,0,true],[2,0,false],[1,2,true],[1,1,false]
// ].forEach(arg => second_game.move.call(second_game, ...arg))

// let third_game = new TicTacToe(3);
// [
//     [2,1,true],[2,0,false],[2,2,true],[0,0,false],[0,2,true],[0,1,false],[1,1,true],[1,2,false],[1,0,true]
// ].forEach(arg => third_game.move.call(third_game, ...arg));

function test([[n], ...rest]) {
    let game = new TicTacToe(n);
    rest.forEach(args => game.move.call(game, ...args));
    console.log(game);
}


test([[2],[0,0,false],[0,1,true],[1,0,false]]);
