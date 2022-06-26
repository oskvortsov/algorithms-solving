//https://binarysearch.com/problems/Trie
class TrieNode {
    nodes = [];
    isEndOfWord: boolean;
}

class Trie {
    root = null;

    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let head = this.root;

        for (let letter of word) {
            if (!head.nodes[letter]) head.nodes[letter] = new TrieNode();
            head = head.nodes[letter];
        }

        head.isEndOfWord = true;
    }

    exists(word) {
        let head = this.root;

        for (let letter of word) {
            if (!head.nodes[letter]) return false;
            head = head.nodes[letter];
        }

        return head.isEndOfWord;
    }

    startswith(prefix) {
        let head = this.root;

        for (let letter of prefix) {
            if (!head.nodes[letter]) return false;
            head = head.nodes[letter];
        }

        return true;
    }
}

const trie = new Trie();

const methods = ["add", "add", "exists", "startswith", "exists"];
const arguments = [["dog"], ["document"], ["dog"], ["doc"], ["doge"]];
// @ts-ignore
const result = [];

for (let num in methods) {
    result.push(trie[methods[num]].apply(trie, arguments[num]));
}

console.log(result);
