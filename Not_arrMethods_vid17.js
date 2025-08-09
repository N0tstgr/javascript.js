//ARray methods
let num = [4, 5, 3, 9, 2]
let b  = num.toString()//b is now a string
console.log(b, typeof b)
let c = num.join(" & ")
console.log(c, typeof c)
// let v = num.pop() // pop returns the popped elements
// console.log(num, v)
// let v = num.push(8) // push returns the new array length and add a new element in the array
// console.log(num, v)
// let k  = num.shift() // REmoves an element from the start of the array
// console.log(num, k)
let k  = num.unshift(8)// add a new element in the begining and returns the new array length
console.log(k, num)