/*Factorial Program in javascript
5! = 5*4*3*2*1 = 120
3! = 3*2*1 = 6
*/

let n = 5, fact = 1

for(let i=n; i>=1; i--){
    console.log(i);
    fact = fact * i;
}
console.log("Fctorial of",n,fact);