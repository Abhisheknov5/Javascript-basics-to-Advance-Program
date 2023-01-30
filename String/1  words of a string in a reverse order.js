/* Print words of a String in a reverse order
 Example:- input- Apple is sweet fruit
           output- fruit sweet is Apple

*/
console.log('Print words of a String in a reverse order');

var string = "Apple is sweet fruit";
var words = string.split(" ");
words.reverse();
words.join(" ");

console.log(words);