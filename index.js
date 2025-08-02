
// 1.Ways to print in Javascript
    //javascritpt console api
    
    // alert("he");

    //2. document.write("this is  document write")
    // console.log("hare krishna");
    // console.warn("this is warning", 9+9 ," Another log")
    // console.error("this is an error , btw! i am testing it")
/*
    Multi
    line
    comment
    */
    var number1 = 98;
    var number2 = 93;
    console.log(number1 + number2)
//4. Data types in Javascript


//numebers
var num1 = 233;
var num2 = 432;

//string
var str1 = "this is a string";
var str2 = 'this is also a string';

//objects
var marks ={
vikash: 34,
Not: 76,
vikashthetrillionaire: 87,
vikashmit:100.00
}
// console.log(marks)
//booleans
var a =true
var b = false

// console.log(a,b)

//var und; ---it is also undefined
var und = undefined;
// console.log(und);

var n = null;
console.log(n);
/*At a very high level, there are two types of data types 
in javascript
1. Primitive data types:--undefined, null, number, string, symbol, boolean
2. Reference data tyeps:-- Arrays and Objects
*/
var arr = [1, 2, "vikashthetrillionaire", 4, 5];
// console.log(arr)


//Operators in javascript
//arithmatic operatorss
var a = 8;
var c = 8;
var n = 7;
console.log("the value of the given variable is ", a * c + n);
console.log("the value of the given variable is ", a + c + n);
console.log("the value of the given variable is ", a - c / n);
console.log("the value of the given variable is ", a + c / n);

//Assingment operators 
 c = a;
//  c += a;
 c -= a;
//  c /=  
console.log(c)

//comparison operators



// var l = 89;
// var j = 87;

// console.log(l>=j);


// //logical  or perators
// console.log(true || true)
// console.log(true  ||false)
// console.log(false || false)
 
// //logical  and operators
// console.log(true && true)
// console.log(true && false)
// console.log(false &&  false)


// //logical not operator

// console.log(!true)
// console.log(!false)
// console.log(!false)

//Funtions in Javascript
//DRY -- do not repeat yourself
function avg(a,b){
   c =  (a + b)/2;
    return c;
}
c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1, c2);

//conditionsnals in javascripts
//single if statement

var age = 6;
if(age>9){
    console.log("you are going to become a  teeange")
}


// var age = 6;

//if-else statement
if(age>9){
    console.log("you are going to become a  teeange")
}else{
    console.log("you are a kid")
}
//if-else ladder





















