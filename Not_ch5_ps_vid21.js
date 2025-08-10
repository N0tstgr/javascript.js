//Problem 1 
const prompt  = require("prompt-sync")();

// let a = [3, 5, 2, 6, 7, 8]


// n = prompt("Enter the number : ")
// n = Number.parseInt(n)
// a.push(n)
// console.log(a)

//Problem 2 

// let a = [3, 5, 2, 6, 7, 8]
// let n;
// do {
//     n = prompt("Enter the number : ")
// n = Number.parseInt(n)
// a.push(n)
// }    while(n!=0);
// console.log(a)

//Practice 3
// let f = [3, 5, 2, 6, 7, 8, 80,90]
// let great = f.filter((g)=>{
//     return g%10==0
// })
// console.log(great)

//Practice 4
let f = [3, 5, 2, 6, 7, 8, 80,90]
let great = f.map((g)=>{
    console.log(g)
    return g*g
})
console.log(great)

//Practice 5