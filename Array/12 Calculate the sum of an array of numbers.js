// 12 Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

// 1 Approach
console.log('1 Approach');

function myFunction(a) {

    return a.reduce((a, b) => a + b, 0)
}
console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000,1]));
console.log(myFunction([-50,0,50,200]));

 // 2 nd Approach 
 console.log('2 nd Approach');

 function sum(arr) {
    var s = 0;
    for( var i= 0; i<arr.length; i++){
        s = s + arr[i];
    }
    return s;

 }
 var returnVal = sum([1,2,3,4,5]);
 console.log(returnVal);