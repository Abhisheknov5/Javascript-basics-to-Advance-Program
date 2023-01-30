// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

// Approach 1

function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a+b : b+a;
}
console.log(myFunction('cheese','cake'));
console.log(myFunction('lips','s'));
console.log(myFunction('Java','script'));
console.log(myFunction(' think, therefore I am', 'I'));

// Approach- 2

function myFunction(a, b) {
    return a.includes(b) ? `{b}${a}`: `{a}${b}`
}
console.log(myFunction('cheese','cake'));
console.log(myFunction('lips','s'));
console.log(myFunction('Java','script'));
console.log(myFunction(' think, therefore I am', 'I'));

// Approach Search Method

const str1 = "Abhishek";
const str2 = "Kumar";
console.log(str1.search(str2) !== -1);

var source = 'Hello World';
var target = 'llo';

console.log(source.search(target) !== -1);