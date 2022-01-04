//https://binarysearch.com/problems/First-Fit-Room
class FirstFitRoom {
  solve(rooms: Array<number>, target: number): number {
    return rooms.find((val) => val >= target) || -1;
  }
}
