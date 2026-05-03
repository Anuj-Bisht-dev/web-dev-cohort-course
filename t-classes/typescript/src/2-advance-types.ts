// aliases
type Team = {
    name: string;
    getSquard: () => string[];
    readonly price: number;
    isBanned: boolean;
}

// aliases usage
const csk: Team = {
    name: "chennai super kings",
    getSquard(){
        return ["thala"];
    },
    price: 50e12,
    isBanned: true,
}


// union    
function KgToLbs(weight: number | string): number{
    // Narrowing
    if(typeof weight === "number") return (weight* 2.2);

    return (parseInt(weight)*2.2);
}

console.log(KgToLbs(1));
console.log(KgToLbs("20kg"));


// InsterSection Types
type Male = {
    speak: () => void;
}

type Lion = {
    roar: () => void;
}

type NaraSimha =  Male&Lion; // intersected using &

let lordNarasimha:NaraSimha = {
    speak: () => {
        console.log('calmily and politely to protect.');
    },
    roar: () => {
        console.log("roar and the world trembels....");
    }
}


// nullable
function greet(name: string | null | undefined){
    if(name){
        console.log(`hello, ${name}`)
    }
    else{
    console.log('hello');
    }
}

greet("kajol");
greet(null);


//  optional channing
type Customer = {
    birthDate?: Date;
}

function getCustomer(id: number): Customer | undefined | null{
    return id === 0 ? null : id <= -1 ? undefined : {birthDate: new Date()}
}

// example --
function checkOddOrEven(num: number): number | string{
    return num%2 === 1 ? "Odd" : num%2 === 0 && num === 0 ? NaN : "Even" ;
}

console.log(checkOddOrEven(0));


// nullish coalescing operator ??
// we can create a fallback default value when dealing with undefined or null objects

let speed : number | null = null;
let ride = {
    // speed: (speed !== null || speed !== undefined) ? speed : 32,
    speed: speed ?? 46,
}

console.log(ride.speed);


// type assertions
let phone = document.getElementById("phone") as HTMLInputElement;
// let phone = document.getElementById<HTMLInputElement> ("phone"); // in react
let phoneNo = phone.value;


// diff b/w Types and Interface

// Use interface for objects and classes.
// Use type for everything else (unions, tuples, primitives, complex types).

// suggested mostly use types.
// interfaces uses mostly for modifing third part lib. interfaces.

// search for more info.
