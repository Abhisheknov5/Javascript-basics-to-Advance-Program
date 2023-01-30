// 5 Swap Number
console.log(" 5 Swapping Two Number:");

/*
1. Swapping using temporary Variable.
2. Swapping without using temporary variable
*/

// 1. Swapping using temporary Variable.
// var a = prompt('Please enter the first value');
// var b = prompt('Please enter the second value');
// console.log(`The value of a is: ${a}, The value of b is : ${b} `);
// var temp;
// temp = a; 
// a = b; 
// b = temp;
// console.log(`After Swapping \n The value of a is: ${a}, The value of b is : ${b} `);


// 2. Swapping without using temporary variable

// var a = parseInt(prompt('Please enter the first value'));
// var b = parseInt(prompt('Please enter the second value'));
// console.log(`The value of a is: ${a}, The value of b is : ${b} `);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`After Swapping \n The value of a is: ${a}, The value of b is : ${b} `);

let a = 10, b= 20;
[a,b] = [b,a];
console.log("a: "+a,"b: "+b);

