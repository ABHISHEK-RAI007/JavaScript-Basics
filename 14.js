// falsy values & truthy values

// false values
// ""
// null
// undefined
// 0
let firstName = ""; // = null, 0, undefined

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}

// truthy value
// "abc"
// 1, -1, 2
firstName = 2;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}
