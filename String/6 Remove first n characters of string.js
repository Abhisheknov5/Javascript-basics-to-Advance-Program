// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

// Approach 1 using slice Method

function myFunction(a) {
    return a.slice(3);
}
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));

// Approach 2 Using substring Method

const str = "abcdefg";
console.log("Using Substring Method:-",str.substring(3));

