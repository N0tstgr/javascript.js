// Problem 1
const prompt = require("prompt-sync")();
let marks = {
    Vikashthetrillionaire: 100,
    Not:70,
    luxxy:69,
    microboy: 80
}

// for(let i=0; i<Object.keys(marks).length;i++){
//     console.log("the marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
// }

//Problem 2
// for(let Object in marks){
//     console.log(" the marks of " + Object+ " is " +  marks[Object])
// }

//Problem 3
// n = prompt("Enter the value of the n : ")
// // i=0
// if(n<19){
//     console.log("try again")
// }else{
//     console.log("It works")
// }


//Problem 3.2
// let cn = 9
// let e

// while(e!=cn){
//     console.log("Try again")
// e = prompt("Enter the number ")

// }
// console.log("You have entered a correct number ")


// Problem 4
function mean(s, t, u, v, w){
return (a+b+c+d+e)/5
}
const mean2 = (s, t, u, v, w) => {
    return (s+t+u+v+w)/5
}
console.log(mean2(3,6,5,7,4))
let a = 5
let b = 4
let c = 3
let d = 2
let e = 9
console.log("The mean of 5 numbers are:", mean(a, b, c, d, e))
