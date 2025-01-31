let p = parseInt(prompt("Enter Principle Amount :-"));
let r = parseFloat(prompt("Enter Rate Of Intrest :-"));
let n = parseFloat(prompt("Enter Number Of Year :-"));


let si = (p * r * n) / 100;

document.getElementById("p").innerHTML = p;
document.getElementById("r").innerHTML = r;
document.getElementById("n").innerHTML = n;
document.getElementById("si").innerHTML = si;




