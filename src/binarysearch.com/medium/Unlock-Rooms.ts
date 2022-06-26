// https://binarysearch.com/problems/Unlock-Rooms
class UnlockRooms {
  static solve(rooms) {
      if (!rooms.length) return false;

      let lockedRooms = new Array(rooms.length).fill(true);

      let queue = [0];

      while (queue.length) {
          let room = queue.pop();
          lockedRooms[room] = false;

          for (const key of rooms[room]) {
              if (lockedRooms[key]) {
                  queue.push(key);
              }
          }
      }

      return !lockedRooms.some(Boolean)
  }
}

console.log(
    UnlockRooms.solve([[1, 3], [2], [0], []]),
    true
);
