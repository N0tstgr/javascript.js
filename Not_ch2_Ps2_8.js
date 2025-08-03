// //Question 1 
const prompt = require("prompt-sync")();
// let age = prompt("Enter the age ")
// if(age>10 && age<20){
//     console.log("this is a desired age  :")
// }else{
//     console.log("this is not the desired age ")
// }

// //Question 2 

// let  life = prompt("What you called life ")
// life = Number.parseInt(life)
// switch(life){
//     case 1 :
//         console.log("Able to survive alone and live alone without depennding on any other factor and not on any other being")
//         break
//         case 2:
//             console.log("vikash is billionaire at the age of 21")
//            break
//             case 3:
//                 console.log("vikash is a handsome and charming leader and enterpreneur")
//                 break
//                 default : 
//                 console.log("this is default ")

// }

//Question 3 

// let c = prompt("Enter the number : ")
// c  = Number.parseInt(c)
// if(c%2==0 && c%3==0){
//     console.log("this is a valid number according to the given case",c)
// }else{
//     console.log("this is not the valid number according to the case ",c)
// }

//Question 4 


//Question 5
let r = prompt("Enter the age : ")
r = Number.parseInt(r)
// if(r>18){
//     console.log("you can drive")
// }else{
//     console.log("You can not drive")
// }
console.log("you can" , (r<18? "Not Drive" : "Drive"))