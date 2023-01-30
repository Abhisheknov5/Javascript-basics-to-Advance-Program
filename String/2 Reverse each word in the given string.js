/* 2 Reverse each word in the given string
Input:- Apple is Sweet Fruit
Output:- elppA si teewS tiurF
*/

// Apporach 1

// let str = "Apple is Sweet Fruit"

// // here code is duplicated
// let str1 = str.split("").reverse().join("");
// let Str2 = str1.split(" ").reverse().join(" ")

// console.log(Str2);

//Apporach - 2
function reverse(str, subStr) {
    return str.split(subStr).reverse().join(subStr);
}
let str = "Apple is Sweet Fruit";

let str1 = reverse(str,"")
let str2 = reverse(str1," ")
console.log(str2); 


