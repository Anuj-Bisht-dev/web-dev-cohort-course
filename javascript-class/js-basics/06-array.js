const carriage1 = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
// threeEmptySeats[1] = "sandy";
console.log(threeEmptySeats);
console.log(threeEmptySeats.length);
const passenger = Array("Veer", "Ayush", "Ravi");

// const singlePassenger = Array.of(3);
const singlePassenger = Array.of(3);
// singlePassenger.push("kamal hashin");
console.log(singlePassenger);

const trainCode = Array.from("DUST");
console.log(trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain);
tempTrain.length = 5;
console.log(tempTrain);

// mutable methods
// push, pop, shift, unshift, splice

//immutable methods (use more rather than above)
// concat, slice, flat (React, redux)

// let arr = [1, 2, [3, [4, [5, 6, [7, 8]]]]]
// arr.flat(dept)

// let value = [1, 2, 3, 4]
// const trainCopy = value.slice() // a commanly used way to copy
// console.log(trainCopy);

// Searching: indexOf, includes, find, findIndex

const array = [5, 12, 8, 130, 44];
const found = array.find((element) => element > 10);
const foundIndex = array.findIndex((element) => element > 10);
console.log(found, foundIndex); // 12, 1



console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));

//key points
// 1. [] Array(4)
// 2. array are 0 based
// 3. Mutating methods: push pop, shift, unshift, splice
// 4. Non Mutating: concat, slice, flat, flatmap [1, 2, 3, [5, 6]]
// 5. Searching includes
// 6. Array.isArray()
