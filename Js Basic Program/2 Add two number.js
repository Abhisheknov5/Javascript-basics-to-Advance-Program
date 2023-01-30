// 1 Program to add static numbers.
// 2 Program  to add dynamic numbers.

// 2 Add two Numbers
console.log("2 Add two Numbers");

// static numbers.
const a = 5;
const b = 6;
// +
const c = a + b;
console.log("The sum of "+a+" and "+b+" is: "+c);
console.log(c);

// dynamic number
// prompt
// If you are adding number use parseInt
// if you adding string concat.

let n1 = prompt("Please enter the first number","");
let n2 = prompt("Please enter the second number","");
//+
var n3 = parseInt(n1) + parseInt(n2);
console.log("The sum of "+n1+" and "+n2+" is: "+n3);
console.log(n3);
