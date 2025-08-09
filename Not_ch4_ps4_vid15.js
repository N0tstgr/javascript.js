//Problem 1 
let str = "har\""
console.log(str.length)

//Problem 2
const text  = "vikash have a photographic memory"
console.log(text.includes("photographic"))
console.log(text.startsWith("have"))
console.log(text.endsWith("memory"))

//gj
const sentence = "the quick brown fox jumps over a lazy dog"
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is': 'is not'} in the sentence`);

//Problem 3
const word1 = "VIKaSh"
console.log(word1.toLowerCase(word1))
console.log(word1.toUpperCase(word1))

//Problem 4
const sentence2 = "please give Rs 1000"

//first method
let amount = sentence2.slice("please give Rs".length)
//or also we can write length of the string unto which we have to slice like in this example the number is 15

console.log(amount)

//second method
const num = '1000'
console.log(sentence.includes(num))
console.log(`the Number "${num}" ${sentence2.includes(num) ? 'is': 'is not'} extracted from the sentence`) 

//Problem 5
let person  = "Stranger"
person[4] = "i"
console.log(person)//person is not change because String is inmutable


