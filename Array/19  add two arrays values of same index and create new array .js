// 19  add two arrays values of same index and create new array.

/* add index of arr1[i]+arr2[i] and create new output array.
   let arr1 = [0,1,2,4,1,3,5]
   let arr2 = [5,6,7,2,1,5,8]
   o/p = [5,7,9,6,2,8,13]
*/
let arr1 = [0,1,2,4,1,3,5]
let arr2 = [5,6,7,2,1,5,8]

let arr3 = arr1.map((value,index) => value+arr2[index]);
console.log(arr3);