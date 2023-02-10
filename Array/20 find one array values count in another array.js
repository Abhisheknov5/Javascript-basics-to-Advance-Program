// 20 find one array values count in another array

/* 2:0 => 2 is element of arr2 and 0 is how many times 2 is repeating in arr1.
   let arr1 = [3,4,5,6,5,4,5];
   let arr2 = [2,3,4,5,6]
   output: ['2:0', '3:1','4:2','5:3','6:1]
*/
let arr1 = [3,4,5,6,5,4,5];
let arr2 = [2,3,4,5,6];

let arr3 = arr2.map((value2) => {
    let total = arr1.reduce((count, value1)=>{
        if(value2==value1) count++;
        return count
    },0)
    return `${value2}:${total}`

})
console.log(arr3);

