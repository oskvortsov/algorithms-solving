// class Solution {
//   solve(moves: Array<string>, x: number, y: number): boolean {
//     let corX = 0;
//     let corY = 0;
//
//     moves.forEach((move) => {
//       switch (move) {
//         case 'NORTH':
//           return corY++;
//         case 'SOUTH':
//           return corY--;
//         case 'EAST':
//           return corX++;
//         case 'WEST':
//           return corX--;
//       }
//     });
//
//     return x === corX && y === corY;
//   }
// }

class Roomba {
  solve(moves: Array<string>, x: number, y: number): boolean {
    let dataMap = {
      NORTH: 0,
      SOUTH: 0,
      EAST: 0,
      WEST: 0,
    };

    moves.forEach((move) => dataMap[move]++);

    return (
      x === dataMap['EAST'] - dataMap['WEST'] &&
      y === dataMap['NORTH'] - dataMap['SOUTH']
    );
  }
}
