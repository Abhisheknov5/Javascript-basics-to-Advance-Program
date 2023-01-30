/* Print words of a String in a reverse order
 Example:- input- Apple is sweet fruit
           output- fruit sweet is Apple

*/
console.log('Print words of a String in a reverse order');

function ReverseString(str) {
    return str.split('').reverse().join('')
}
console.log(ReverseString("Apple is Sweet fruit"));
