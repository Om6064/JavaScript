
// it is 1st way to create an array
let arr = [10,20,30,40,50]

// console.log(arr)

// now 2nd way

// let array = new Array(10).fill(10) //it is 10 empty items array by fill we can put all element as a parameter value  
// console.log(array)


//now we can update a 2nd way array

// let array = new Array(10,20,30,40)//array are inmuteble like disnary you can show here
// console.log(array)
// array[4] = 50
// console.log(array)
// array[8] = 80 // remaineing index is returing the undefined
// console.log(array)


//Looping in array

// 3 type of for loop
// Normal For.
// For Of
// For In

// Normal For
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// For Of
// for (let val of arr) {
//     console.log(val)
// }

// For In
// for (const key in arr) {
//    console.log(key);
// }

// for this we can learn obj

let obj = {
    name : 'aryan',
    grid : 1234,
    isDeveloper : true
};
// console.log(obj.name);// how to show value oof object
// console.log(obj["name"]);// how to show value oof object





for (const key in obj) {
    console.log(key);
 }


