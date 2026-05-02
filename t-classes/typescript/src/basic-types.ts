// built-in datatypes
// let sales: number = 123_345_898;
// let names: string = "mahatma gandhi";
// let userIsActive: boolean = true;
// let userInfo: object = {name: "saroj", userId: 123};
// let course: undefined = undefined;
// let obj: null = null;
// let sym: symbol = Symbol(123);
// let bigInt:bigint = 1243244543n;


// any type tsconfig -> noImplicityAny: true (best practices)
let naam: any;


// unknown - typesafe version of any
let userInfo: unknown = 'k-2/c magal bazar, patna';

// unknown is mostly uses for type narrowing
function typeNarrowing(userInfo:unknown){
    if(userInfo === 'string'){
        console.log('this might be address or name');
    }
    if(userInfo === 'number'){
        console.log('this might be it\'s phone number or salary');
    }
    if(userInfo === 'boolean'){
        console.log('this might be the status of the user');
    }
    // so on
}


// never - represents the value that never occur.
// function purpose(message: string): never {
    // throw new Error('Tumhare taste acha hai par meri choice itni bhi buri nahi hai');
// }
// return nothing just throw an err.

// purpose("....");


// enum - represents to lists of the related constant
const enum TeamStrenght { Weak = 1, Good, Strong };
let yellow = TeamStrenght.Weak; // to use
console.log(yellow);


// array - ( anotation is the type defining of a constant )
const arr: number[] = [1, 2, 3, 4];


// tuple - it's a fixed length of array where each element have a specifice type
const companyUser: [number, string, object] = [1, "satyam", {address: "w-123/k, mandi marg, kashmir"}];


// object
let mentor: {id: number,
     name: string,
     teaches: (sub: string[]) => void,
     address?: {city: string, pin: number}  } = 
{id: 123, name: 'sandy',teaches(sub: string[]){
    console.log("subjects names: ", sub.join(","));
}}


// functions - noUnusedParameter, noUnusedVariable
function calculatePrice(team: string): number{

    if(team.toLowerCase() == "rr"){
        return 15e10; // 15,000 cr.
    }
    if(team.toLowerCase() == "rcb"){
        return 18e10;
    }
    if(team.toLowerCase() == "csk"){
        return 50e10;
    }
    return NaN;
}


// Type Inference
let value = 123;

let company = "google";

const Obj = 
{id: 123, name: 'sandy',teaches(sub: string[]){
    console.log("subjects names: ", sub.join(","));
}}

