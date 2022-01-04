//https://binarysearch.com/problems/Revolving-Door/
class RevolvingDoor {
    static solve(requests: Array<Array<number>>): Array<Array<number>> {
        let orders = [];
        let dirDoor = 0;
        let shift = 0;

        while (requests.length) {
            let indexMin = 0;

            requests.forEach((req, reqInd) => {
                if (req[0] < requests[indexMin][0] || req[0] == requests[indexMin][0] && req[1] === dirDoor) {
                    indexMin = reqInd
                }
            })

            orders.push(requests[indexMin]);

        }

        return requests;
    }
}


const input = [
    [1, 0],
    [2, 1],
    [5, 0],
    [5, 1],
    [2, 0]
];

const output = [
    [1, 0],
    [2, 0],
    [3, 1],
    [5, 1],
    [6, 0]
];

console.log(RevolvingDoor.solve(input));
