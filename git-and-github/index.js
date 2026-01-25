let a = "anuj";
console.log(a);

// i created my new file here

let b = "singh bisht";
console.log(b);

function sub(a, b) {
    try {
        if (b == 0) {
            throw new Error("the denominator cannot be zero");
        }
        return a - b;
    } catch {
        console.log(error.message);
    }
}
