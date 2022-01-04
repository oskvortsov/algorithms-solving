//https://binarysearch.com/problems/Longest-Common-Prefix
class LongestCommonPrefix {
    solve(words: Array<string>): string {
        let index = 0;
        let temp = words[0];

        while (index < temp.length) {
            if (words.every(word => word[index] == temp[index])) {
                index++;
            } else {
                return temp.substring(0, index);
            }
        }
    }
}
