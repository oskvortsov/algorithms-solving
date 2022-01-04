//https://binarysearch.com/problems/Seat-Arrangement
class SeatArrangement {
  solve(n: number, seats: Array<number>): boolean {
    let availableSeats = 0;
    let countZero = 1;

    seats.forEach((i) => {
      if (i === 0) {
        countZero++;
      } else if (countZero) {
        availableSeats += Math.floor((countZero - 1) / 2);
        countZero = 0;
      }
    });
    availableSeats += Math.floor(countZero / 2);

    return n <= availableSeats;
  }
}
