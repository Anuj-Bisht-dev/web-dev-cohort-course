let million = 1_000_000;

// e --> 10
let lakhs = 1e5;
let crore = 4e7;

// e-2 --> 10^-2
let atomDIA = 5e-10;
let nucleusDIA = 1e-15;

// Octal
console.log(0o13);

// Binary
console.log(0b111); // 111 --> 4+2+1 = 7

// HexaDecimal
console.log(0xff); // 0-f --> 0-15 (total 16 nums)

// toString()
console.log((11).toString()); // the default type is binary (10)
// but we can change it in other types too..
// console.log((11).toString(16))