// Write a function that takes a value as argument. Return the type of the value.

function myFunction(a) {
    return typeof(a);
}
console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction('string'));
console.log(myFunction(['array']));