/* Palindrome String is a string that is same after 
reverse.
Example:- 48984, 131, 545, abcba
*/

let str = '153';
let str1 = str.split("").reverse().join("")

if(str==str1) {
    console.log('Yes! Pallindrome');
} else {
    console.log('Not! Pallindrome');
}