// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 5;
let num2 = 7;
console.log(num1>num2);

num1 = 7;
num2 = 7;
console.log(num1>=num2);

num1 = 8;
num2 = 7;
console.log(num1>=num2);

num1 = 6;
num2 = 7;
console.log(num1<num2);

// == vs === 
num1 = 7;
num2 = 7; 
console.log(num1 == num2);

num1 = "7";
num2 = 7; 
console.log(num1 == num2); // Only value will consider not data type. this happened only in Js.
// to check data type use === .
console.log(num1 === num2); 

num1 = "7";
num2 = 7; 
console.log(num1 == num2);
console.log(num1 === num2);

// != vs !==

console.log( num1 != num2);

num1 = "8";
num2 = 7; 
console.log( num1 != num2);

// vs
num1 = "7";
num2 = 7; 
console.log( num1 !== num2);

//Answer
// false
// 12.js:12 true
// 12.js:16 true
// 12.js:20 true
// 12.js:25 true
// 12.js:29 true
// 12.js:31 false
// 12.js:35 true
// 12.js:36 false
// 12.js:40 false
// 12.js:44 true
// 12.js:49 true