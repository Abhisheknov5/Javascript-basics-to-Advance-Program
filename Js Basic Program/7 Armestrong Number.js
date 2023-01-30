/* Armestrong number is  a number that is equal 
to the sum of cubes of its digits.
Example:- 0,1,153,370,371 and 407 are the Armestrong numbers.

153 = (1*1*1)+(5*5*5)+(3*3*3)
where:
(1*1*1) = 1
(5*5*5) = 125
(3*3*3) = 27
So:
1+125+27= 153
*/

let x = 153;
let sum = 0;
let temp = x;

while(temp > 0) {
    y = temp%10;
    sum = sum + y*y*y;
    temp = parseInt(temp/10);

}
console.log(x,sum);
if(x == sum) {
    console.log('Yes Armestrong!');
} else {
    console.log('Not Armestrong!');
} 

