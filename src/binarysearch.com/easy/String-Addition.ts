// https://binarysearch.com/problems/String-Addition
class StringAddition {
    static solve(a, b) {
        let result = "";
        let buffer = 0;
        let indexA = a.length - 1;
        let indexB = b.length - 1;

        while (indexA > -1 || indexB > -1) {
            let temp = (+a[indexA--] || 0) + (+b[indexB--] || 0) + buffer;

            if (temp > 9) {
                buffer = 1;
                result = (temp % 10) + result;
            } else {
                buffer = 0;
                result = temp + result;
            }
        }

        if (buffer) result = buffer + result;

        return result;
    }
}

console.log(StringAddition.solve("999", "1"), "1000");
console.log(StringAddition.solve("12", "23"), "35");
console.log(StringAddition.solve("17", "3"), "20");
console.log(StringAddition.solve("1000", "1001"), "2001");
console.log(StringAddition.solve(
    "326642276351184189957852536744954759121372159212431629295739972968577454913182595241284453967881186528584815131848795718148895516597674993736123293567",
    "451189784729497761314235387856324858466799351925847672357779247715139576577554673276635184381399214228951547974985497314617579486751897998369325324337"
), "777832061080681951272087924601279617588171511138279301653519220683717031490737268517919638349280400757536363106834293032766475003349572992105448617904".length);
