// Converstion ==> number, [string  it gives us full control of objects]

// obj[Symbol.toPrimitive(hint)]

// hint --> string, number, default
// binary + (addition, concatination)

let myUniversity = {
    status: "wasted",
    aura: -1000,

    // custom converstion
    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return (this.status);
        }
        return this.aura;
    }
}

console.log(myUniversity);
// custom converstions are working perfectly
console.log(String(myUniversity));
console.log(Number(myUniversity));

// hint: string --> toString()
// hint: number --> valueOf()


// function randomNumber(start, end) {
//     Math.random() * (end - start);
// }


// let str = [1, 2, 3, 4, 3, 5, 6, 2, 3, 2, 1];
// let unique = new Array(...new Set(str));
// console.log(unique);
