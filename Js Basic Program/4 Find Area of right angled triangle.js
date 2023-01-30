// 4 Find Area of right angled triangle
console.log(" 4 Find Area of right angled triangle");

const base = prompt('Please enter the base value');
const height = prompt('Please enter the height value');
const area = (base * height)/2;
console.log("Base:"+base+" height "+height+" area: "+area);
console.log(area);
  
// Find the Area of regular triangle
// herones formula
console.log("Find the Area of regular triangle");

const a = 10;
const b = 5;
const c = 10;
const s = (a+b+c)/2;
const temp = s*(s-a)*(s-b)*(s-c);
const areaa = Math.sqrt(temp);
console.log(areaa);
console.log(s);
console.log(temp);
