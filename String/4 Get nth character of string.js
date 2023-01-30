// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function myFunction(a, n) {
    return a[n-1];
}
console.log(myFunction('abcd',1));
console.log(myFunction('zyxbwpl',5));
console.log(myFunction('gfedcba',5));

// Using charAt() method
console.log(" CharAt Method");
const a = "ABHISHEK";
console.log(a.charAt(7));