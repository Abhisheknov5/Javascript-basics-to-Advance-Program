//  Check if a number is a whole number
// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

// 1 st Approach 
console.log('1 st Approach ');
function myFUnction(a) {
    return a- Math.floor(a) === 0;
}
console.log(myFUnction(4));
console.log(myFUnction(1.123));
console.log(myFUnction(1048));
console.log(myFUnction(10.48));

// 2nd Approach
console.log('2nd Approach');
function myFUnction(a) {
    return parseInt(a) === a;
}
console.log(myFUnction(4));
console.log(myFUnction(1.123));
console.log(myFUnction(1048));
console.log(myFUnction(10.48));

// 3 rd Approach
console.log('3 rd Approach');

function myFunction(a) {
    return Number.isInteger(a);
}
console.log(myFUnction(4));
console.log(myFUnction(1.123));
console.log(myFUnction(1048));
console.log(myFUnction(10.48));
