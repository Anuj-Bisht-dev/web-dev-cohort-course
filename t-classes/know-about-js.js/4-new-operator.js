// it is mostly used with constructor functions

//Constructor
// 1. capital letter name [String, Number, Arrayy, Object]
// 2. should be executed by new operator

// constructor function
function User(name) {
    this.name = name;
    this.isPaid = false;
};

const anuj = new User("anuj");

// console.log(anuj.name);
// console.log(anuj.isPaid);

// what new does
// 1. creates empty obj {}
// 2. create prototypes
// 3. assign this to obj
// 4. returns the obj

