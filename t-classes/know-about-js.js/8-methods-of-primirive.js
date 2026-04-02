// It all comes at cost...
// obj are heavier than primitives

let str = "strCool";

let smallCaseStr = str.toLowerCase();
// in the moment of accessing its prop. a special obj(wrapper) is created that knows the value of the str, and has useful methods like: toLowerCase()
// console.log(smallCaseStr);

// String, Number, Object, Symbol, BigInt -- wrappers
