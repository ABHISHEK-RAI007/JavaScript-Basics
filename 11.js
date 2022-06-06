// undefined 

let firstName;
console.log(typeof firstName);
firstName = "Harshit"
console.log(typeof firstName, firstName);

// null
let myVariable = null;
console.log(typeof myVariable, myVariable); // Bug and error in JS bc it is givig object.
myVariable = "Harshit";
console.log(typeof myVariable, myVariable)

// BigInt in 2020

let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(sameMyNumber);
console.log(myNumber + sameMyNumber);
 console.log(Number.MAX_SAFE_INTEGER);


