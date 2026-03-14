// object --> properties --> key: value

// Two ways
let gemini = new Object(); // Object Constructor Syntax
let claude = {} // object lateral

let gpt = {
    company: "openAI",
    version: 5.3,
    realiseDate: 2025,
};

// console.log(gpt.company);

gpt.type = "large language model";

gpt.multiModel = true;

//over-write
gpt.type = "LLM";

// delete
delete gpt.type;


let sonnet = {
    company: "anthropic",
    version: 4.6,
    "released on": 2025, // multiword prop must be quoted
}
// always use tailing comma - (help while pushing value from outside or can easy up-down values without error)

// use square bracket notation for these types of keys
// console.log(sonnet["released on"]);

// expression value as prop names
const input = "company"
console.log(sonnet[input]);


// property short-hand
function buyLaptop(name, price) {
    console.log("amiri aa rahi hai bhai");
    return {
        brand: "Apple",
        // name: name,
        // price: price,
        name, // same as above (when key and value name are same)
        price,
    };
}

let myMac = buyLaptop("M5 Air", 99_999);
// console.log(myMac);

// search a prop
// console.log(myMac.ram === undefined);

// console.log("ram" in myMac); // key in obj (returns boolean)


// looping object for..in

for (let keys in myMac) {
    console.log(`${keys}: ${myMac[keys]}`);
}


// objects are ordered in diff. fashion
// let codes = {
//     // asia
//     91: "India",
//     32: "Belgium",
//     7: "Russia",

//     // north-america
//     1: "Canada",
//     52: "Maxico",
// }

let codes = {
    // asia
    "+91": "India",
    "+32": "Belgium",
    "+7": "Russia",

    // north-america
    "+1": "Canada",
    "+52": "Maxico",
}

console.log(codes); // it prints obj are sorted (ascending order) 


