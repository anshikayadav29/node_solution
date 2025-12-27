function isPalindrome(num) {
    const original = num.toString();
    const reversed = original.split('').reverse().join('');
    return original === reversed;
}
const number = 121; 
if (isPalindrome(number)) {
    console.log(number + " is a palindrome.");
} else {
    console.log(number + " is not a palindrome.");
}