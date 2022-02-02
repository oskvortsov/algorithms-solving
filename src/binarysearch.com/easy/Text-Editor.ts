// https://binarysearch.com/problems/Text-Editor
class TextEditor {
    static solve(s) {
        let stack = [];

        for (let i = 0; i < s.length; i++) {
            if (i + 1 < s.length && s[i] == '<' && s[i + 1] == '-') {
                stack.pop();
                i++;
            } else {
                stack.push(s[i]);
            }
        }

        return stack.join('');
    }
}

console.log(TextEditor.solve('abc<-z'));
console.log(TextEditor.solve('<-x<-z<-'));
console.log(TextEditor.solve('<'));
console.log(TextEditor.solve('<<-'));
console.log(TextEditor.solve('<a-'));
