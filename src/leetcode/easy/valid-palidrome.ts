function isPalindrome(s: string): boolean {
    const temp = s.replace(/[\W_]/g, '').toLocaleLowerCase();

    let left = 0;
    let right = temp.length - 1;

    while(left < right) {
        if (temp[left++] !== temp[right--]) {
            return false;
        }
    }

    return true;
}


console.log(isPalindrome('race a car'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0P'));
