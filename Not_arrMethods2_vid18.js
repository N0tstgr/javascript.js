
// let num2 = [1, 4, 6, 9, 5, 2, 5, 2, 0]
// let num3 = [1, 4, 6, 9, 5, 2, 5 , 2 , 1]
// let num4 = [1, 4, 6, 9, 5, 2, 5 , 2 , 1, 5 , 90,78]

// // console.log(num.length)
// // delete num[1] //there is no effect on the length of the array
// // console.log(num.length)

// let newArrays = num.concat(num2, num3, num4)
// console.log(newArrays)
// console.log(num)

//sorted method
// let compare = (a, b)=>{ //by using compare function we can evaluate them as ascending and descendin also anytype
//     return b-a
// }
// let num = [1, 4, 6, 9,26,2221, 5, 22]//sorting alphabetically
// num.sort(compare)
// num.reverse()
// console.log(num)


//splice and slice


let num4 = [1, 4, 6, 9, 5, 2, 5 , 2 , 1, 5 , 90,78]
// let deletedValues = num4.splice(2, 5, 1000, 1034, 1235, 48954, 4854)
// console.log(typeof deletedValues)

num4.slice(2)
console.log(num4)