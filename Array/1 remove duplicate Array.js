// Remove duplicate from an Array without using loop

let arr = [2,3,4,5,6,7,2,4,6]; 
let mySet = new Set(arr);

let newArr = [...mySet]
console.log(arr);
console.log(mySet);