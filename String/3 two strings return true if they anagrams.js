/* Give 3 two strings return true if they anagrams 
of one another.
anagram :- same character different Position.
Example- Mary is an anagram of Army
Man is an anagram of RAM
*/


// let x = "Mary";
// let y = "Army";

//  Duplicate code
// let a = x.toLowerCase().split("").sort().join("");
// let b = y.toLowerCase().split("").sort().join("");

// let isAnagram = (a==b)?true:false
// console.log(isAnagram);

function Anagram(str){
    return str.toLowerCase().split("").sort().join("");
}
let x = "Mary";
let y = "Army";

let a = Anagram(x);
let b = Anagram(y);

let isAnagram = (a==b)?true:false
console.log(isAnagram); 