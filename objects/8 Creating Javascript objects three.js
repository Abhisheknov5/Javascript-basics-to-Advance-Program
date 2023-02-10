// 8 Creating Javascript objects three.js
/* Write a function that takes two arrays (a and b) as arguments. 
Create an object that has properties with keys 'a' and corresponding values 'b'. 
Return the object.
*/
// 1 Approach
console.log('1 Approach');

function myFunction(a, b) {
    let t = {}
    let index=0;
    for(let i of a)
    {
        t[i]=b[index];
        index++;
    }

    return t
}
console.log(myFunction(['a','b','c'],[1,2,3]));
console.log(myFunction(['w','x','y','z'],[10,9,5,2]));
console.log([1,'b'],['a',2]);