// 4 Check if property exists in object
/*
Write a function that takes an object (a) and a string (b) as argument.
Return true if the object has a property with key 'b'. Return false otherwise. 
Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined.
But the property itself exists.
*/
// 1 Approach
console.log('1 Approach');

function myFunction(a, b) {
    return b in a;
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'));

// 2 Approach
console.log('2 Approach');

function myFunction(a, b) {
    return a.hasOwnProperty(b)
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'));