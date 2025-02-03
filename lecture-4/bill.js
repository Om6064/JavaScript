let a = parseFloat(prompt("Enter shampoo price : "));
let b = parseFloat(prompt("Enter shampoo Quntity : "));

let total_shampoo = a * b ;

document.getElementById("pri-sham").innerHTML = a;
document.getElementById("q-sham").innerHTML = b;
document.getElementById("t-sham").innerHTML = total_shampoo;

let c = parseFloat(prompt("Enter shaboo price : "));
let d = parseFloat(prompt("Enter shaboo Quntity : "));

let total_shaboo = c * d ;

document.getElementById("pri-soap").innerHTML = c;
document.getElementById("q-soap").innerHTML = d;
document.getElementById("t-soap").innerHTML = total_shaboo;

let g = parseFloat(prompt("Enter face wash price : "));
let f = parseFloat(prompt("Enter face wash Quntity : "));

let total_f = g * f ;

document.getElementById("pri-f").innerHTML = g;
document.getElementById("q-f").innerHTML = f;
document.getElementById("t-f").innerHTML = total_f;

let gt = total_shampoo +total_shaboo+total_f;

document.getElementById("gt").innerHTML = gt;