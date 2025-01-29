let a = 5; // it is in es6 which is provide high security
var b = "Aryan"; // var is in es5 its shown in console when write window 
// var has haoisted 
// we can reinslize var variable like ,
var b = "om" //so output is om and aryan is wasted means varable bites are wasted
//and let data type cannot reintilize like,
// let a gives error

const pi = 3.14; // also in es6 and cannot be overriden

console.log("10" + 10);
// plus is used for concatinate and arithmatic its return always string
console.log("10" - 10);
// minus is used for only arithmatic its return always int

console.log(a);
console.log(b);
console.log(pi);

//when programe is running first is exicute var data types then programme then we print var variable then output is undefined
// and not same thing in let variable its return reference error
// javascript is interpriter language