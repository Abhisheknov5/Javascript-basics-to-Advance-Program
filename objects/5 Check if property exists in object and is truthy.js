// 5 Check if property exists in object and is truthy.
/*
Write a function that takes an object (a) and a string (b) as argument. 
Return true if the object has a property with key 'b', but only if it has a truthy value. 
In other words, it should not be null or undefined or false. Return false otherwise.
*/
// 1 Approach
console.log('1 Approach');

function myFunction(a, b) {
    return Boolean(a[b]);
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:null,z:'c'},'y'));
console.log(myFunction({x:'a',b:'b',z:undefined},'z'));

// 2 Approach
console.log('2 Approach');

function myFunction(a, b) {
    return a[b] ? true : false;
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:null,z:'c'},'y'));
console.log(myFunction({x:'a',b:'b',z:undefined},'z'));

// 3 Approach
console.log('3 Approach');

function myFunction(a,b) {
    return b in a;
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:null,z:'c'},'y'));
console.log(myFunction({x:'a',b:'b',z:undefined},'z'));
