"use strict"
// type of operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22;
let firstName = "Abhishek"

// checking data type

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof "Pooja");
console.log(typeof 50);

// // convert string to number. 

age = age + ""; // "22"
console.log(typeof age);
// or console.log(typeof age + "");

// or 
age = 18;
age = String(age);
console.log(typeof age);

// // convert number to string. 

let myStr = "34";
// converting 
myStr = +"34";
console.log(typeof myStr);

// or
myStr = Number(myStr);
console.log(typeof myStr);

