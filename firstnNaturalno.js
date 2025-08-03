const prompt = require("prompt-sync")();
let sum = 0
let n = prompt("Enter the number : ")
for(let i=0; i<n; i++){
    sum = sum + (i+1)
    console.log((i+1), "+")
}
console.log("sum of first " + n + " natural number is "+sum)