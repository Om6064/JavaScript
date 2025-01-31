let a = 34;
let b = 67;

let temp;

console.log(`before : a = ${a} :: b = ${b}` );

temp = a;
a = b;
b = temp;

console.log(`after : a = ${a} :: b = ${b}`);