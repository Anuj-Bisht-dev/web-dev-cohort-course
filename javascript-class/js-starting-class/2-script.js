//variables

// userName = "alexander";
// console.log(`user name is: ${userName}`); // here it will shows alexander without decelaration firstly
// because it's global scope hoisting nature

// var userName = "raju";
// console.log(`user name is: ${userName}`); // calling inside a tempalte lateral


// introducing let in the game

// console.log(num); // but here we cannot use let like var becuase of
// <<----------- temporal dead zone between calling and initilization ------------->>
// let num = 12;
// console.log(num);
// it solved the global scopic problem
// let also do hoisited but because of TDZ we cannot declare or access it before intilization



// what is a funciton
// a funciton is a resusable set of instructions
// a block of code to perform a perticular task

// function sayHello() {
//     console.log("bye");
// }

// sayHello(); // calling a fucntion

// parameterized funciton
// function xyz(x) {
//     return x + 10;
// }

// console.log(xyz(10));

// arrow function 
// let konsaFunctionHaiBe = x => x + 100; // can write without return if only one line of code
// also can write without paranthesis if only one

// console.log(konsaFunctionHaiBe(2));

// we should print value inside a function we has to return it so user can use it

// function addition(num1, num2){
//     const result =  num1 + num2;
//     return result;
// }

// const r = addition(1, 2);
// for(let i = 1; i<= r; i++){
//     console.log(`value of i is: ${i} <3`);
// } 


// difference b/w 
// console.log(kuchBhiFunction());
// function kuchBhiFunction(){
//     return "kuch return nahi kar raha hu bhai tension mat le";
// }

// console.log(kuchBhi()); throw an error because of in above case a function is hoisted along its body but here a variable declaration hoisted only
// let/const/var
// var kuchBhi = ()=>{
//     return "kuch bhi nahi hai function";
// }


// data structures
// array
let fruits = ["apple", "tarbooj", "kela", true, "santra", 1];

// functions on array

// console.log(fruits.push("kiwi"));
// console.log(fruits.length);
// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits.unshift("aaddu"));
// console.log(fruits.includes("aam"));

// console.log(fruits);

// console.log(fruits.includes("aaddu"));
// console.log(fruits.slice(2, 5));
// console.log(fruits.indexOf("harish"));  


// high order function - a high order function is a func which takes anothere funciton as a parameter

// function iAmAFuncion(ekFunction) { // it takes an another fucntion as a parameter
//     return ekFunction() + 100;
// }

// function kuchAddKarenBhai(){
//     return 10;
// }

// console.log(iAmAFuncion(kuchAddKarenBhai));

// application of high-order functions

// we want to do loop of an array
// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);

// }


fruits.forEach((element) => {
    console.log(element);
});