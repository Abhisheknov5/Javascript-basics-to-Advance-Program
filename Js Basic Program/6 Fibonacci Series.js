// Fibonacci Series
// Example: 0,1,2,3,5,8,13,21,34

let n1 = 0, n2 = 1, n3, limit =10
let arr = [n1,n2]

for (let i=2; i<limit; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    arr.push(n3)
}
console.log(arr.join(","));