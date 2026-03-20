// JS Specs says
// objects keys ==> are either string or symbol.

// A symbol is a "primtive unique value" with an optional discription
let baby = Symbol("mai ka ladla");

// Symbols are always unique if the desc are same
// console.log(Symbol("xyz ladle") === Symbol("xyz ladle")); // always false


// use case
// Hidden Properties, skipped by for..in loops

// Global Symbol - syntax (Symbol.for("desc"))
// they exist in global symbol registry

let org = Symbol.for("ChaiCode");
let company = Symbol.for("ChaiCode");
// used when we create libraries 

// console.log(org === company); // return true ('cause we created global symbol with same desc)

// can access it by "key"
// console.log(Symbol.keyFor(org)); // it return the desc of global symbol

// system symbols
// Symbol.iterator
// Symbol.toPrimtive

// technically symbols are 100% Hidden
// There is built in method Object.getOwnPropertySymbols(obj);