// https://binarysearch.com/problems/Mutual-Followers
class MutualFollowers {
    static solve(relations) {
        const connections = {};
        const result = new Set<number>();


        for (const [person, follower] of relations) {
            if (!(person in connections)) {
                connections[person] = 0;
            }

            connections[person] |= 1 << follower;
            if(
                (connections[person] & (1 << follower)) && (connections[follower] & (1 << person))
            ) {
                result.add(follower);
                result.add(person);
            }

        }

        return [...result].sort((a, b) => a - b);

    }
}


class MutualFollowers1 {
  static solve(relations) {
      const map = new Map();
      const result = new Set<number>();


      for (const [person, follower] of relations) {
          const followers = map.get(person) || new Set();
          followers.add(follower)
          map.set(person, followers);

          if (map.get(person)?.has(follower) == map.get(follower)?.has(person)) {
              result.add(person);
              result.add(follower);
          }
      }

      return [...result].sort((a, b) => a - b);

  }
}

console.log(
  MutualFollowers.solve([
    [0, 65],
    [1, 2],
    [2, 3],
    [0, 3],
    [3, 0],
    [2, 0],
  ]),
  [0, 1],
);
