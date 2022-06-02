"use strict"
// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName= "   HarSHit   ";

// Remove spaces by Trim
// console.log(firstName.length);
console.log(firstName.length);
// trim() 
// let new_string = firstName.trim();
// console.log(new_string.length)
firstName = firstName.trim(); // it will new string without string "Harshit"
console.log(firstName)
console.log(firstName.length);

// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);

// toUpperCase()

firstName = firstName.toUpperCase();
console.log(firstName);
// firstName = firstName.toUpperCase();

// toLowerCase()
firstName = firstName.toLowerCase();
console.log(firstName);
// firstName = firstName.toLowerCase();
// console.log(firstName);

// slice()

// start index 
// end index

let newstring = firstName.slice(1);
console.log(newstring)