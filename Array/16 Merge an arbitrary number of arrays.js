// 16 Merge an arbitrary number of arrays

// Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

function myFunction(...arrays) {

    return
}
console.log(myFunction([1,2,3],[4,5,6]));
console.log(myFunction(['a','b','c'],[4,5,6]));
console.log(myFunction([true,true],[1,2],['a','b']));


// 1 Using for loop
console.log('1 Using for loop');

const merge = (first, second) => {
    for(let i=0; i<second.length; i++) {
        first.push(second[i]);
    }
    return first;
}
console.log(merge([1,2,3],[4,5,6]));

// 2 Using the Spread Operator
console.log('2 Using the Spread Operator');

const arr1 = [1,2,3];
const arr2 = [4,5,6];
// Merge Array
const merged1 = [...arr1, ...arr2];
console.log(merged1);

// 3 Using the concat() array method
console.log('Using the concat() array method');

const arr3 =[1,2,3];
const arr4 = [4,5,6];

// Merge Array
const merged2 = arr3.concat(arr4);
console.log(merged2);

// 4 taps 
console.log('4 taps');

const arr5 = [1,2,3,4];
const name = 'taps';

// merge Array
const merged3 =[...arr5, ...name];
console.log(merged3);
