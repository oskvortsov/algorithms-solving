//https://leetcode.com/problems/palindrome-number/
function isPalindrome2(x: number): boolean {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;

    let temp = 0;

    while (x > temp) {
        temp = temp * 10 + x % 10;
        x = Math.trunc(x / 10);
    }


    return x == temp || Math.trunc(temp / 10) == x;
}

function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;

    let temp = 0;

    while (x > temp) {
        temp = temp * 10 + x % 10;
        x = Math.trunc(x / 10);
    }


    return x == temp || Math.trunc(temp / 10) == x;
}

console.log(isPalindrome(121));
console.log(isPalindrome(11));
console.log(isPalindrome(10));
