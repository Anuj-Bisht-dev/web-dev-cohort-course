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
    } catch(error){
        console.log(error);
    }
}

function multiply(a, b) {
    try{
        if((a && b) > 0){
            throw new Error("Both value cannot be zero at a time");
        }
        return a * b;
    }catch(error){
        console.log(error);
    }
}

multiply(2, 30)
