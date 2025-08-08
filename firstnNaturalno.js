const prompt = require("prompt-sync")();
let sum = 0
let n = prompt("Enter the number : ")
for(let i=0; i<n; i++){   //here in the place of let using var will work for everyone even for i which is not defined during the use of let
    sum = sum + (i+1)
    console.log((i+1), "+")
}
console.log("sum of first " + n + " natural number is "+sum)
console.log(i)

let obj = {
    vikash: 55,
    Not: 89
}
//for in loop
for (let a in obj){
    console.log( " Marks of " + a + " are "+ obj[a])
}

//for of loop
for (let b of "Vikashthetrillionaire"){
    console.log(b)
}