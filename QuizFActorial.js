const prompt = require("prompt-sync")();
let factorial = 1
let n = prompt("Enter the value of n ")
for(let i=0; i<n; i++){
factorial +=  factorial *i

}
console.log(factorial)