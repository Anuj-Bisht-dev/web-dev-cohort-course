const aadhar_of_ron = Symbol("aadhar");
const aadhar_of_pan = Symbol("aadhar");

console.log(aadhar_of_pan === aadhar_of_ron); // != (gen. uniq val for each)
console.log(typeof aadhar_of_pan); // symbol
console.log(aadhar_of_ron.toString());
console.log(aadhar_of_pan.description);

const nonIndain = Symbol();
console.log(nonIndain.description);



const biometicHash = Symbol("biometicHash");
const bloodGroup = Symbol("bloodGroup");

const person = {
    name: "sanjay",
    age: 21,
    [biometicHash]: "axyz21nmon", // can write key like this
    [bloodGroup]: "O+"
}

console.log(Object.keys(person)); // symbol are not visible here
console.log(Object.getOwnPropertySymbols(person)); // we can get the symbols of obj using this



// extra portion not that imp.
// created obj iterable
const rtiQueries = {
    quirey: ["Education Budget", "Infra Budget", "Ration Card", "L.P.G Problems"],
    [Symbol.iterator]() {
        let index = 0;
        const Queries = this.quirey;
        return {
            next() {
                if (index < Queries.length) {
                    return { value: Queries[index++], done: false };
                }
                return { value: undefined, done: true };
            },
        };
    },
}

for (const rtiQur of rtiQueries) {
    console.log(rtiQur);
}



const GovernmentScheme = {
    name: "PM Kishan Yojna",
    people: 104,
    [Symbol.toPrimitive](hint) {
        if (hint === "string") { return this.name };
        if (hint === "number") { return 0 };
    }
}

console.log(+GovernmentScheme); // fast way to convert to num.
console.log(`${GovernmentScheme}`); // fast way to conv. to str
