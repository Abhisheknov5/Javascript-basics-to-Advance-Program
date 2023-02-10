// 2 Get nth element of Array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

// Approach 1
console.log('Approach 1');

function myFunction(a, n) {
    return a[n-1];
}
console.log(myFunction([1,2,3,4,5],3));
console.log(myFunction([10,9,8,7,6],5));
console.log(myFunction([7,2,1,6,3],1));

// Approach 2
console.log('Approach 2');

function getNth(arr, n) {
    return arr[n];
}
console.log(getNth([1,2,3],0));
console.log(getNth([1,2,3],1));
