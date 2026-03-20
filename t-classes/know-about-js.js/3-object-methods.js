// const dogesh = {
//     name: "Husky",
// }

// dogesh.dance = function () {
//     console.log("Ichu Ichu Dance");
// }


// let viralDance = function () {
//     console.log("Ichu Ichu dance");
// }

// const dogesh = {
//     name: "Husky",
//     dance: viralDance,
// }


// const dogesh = {
//     name: "Husky",
//     dance: function () {
//         console.log("Ichu Ichu dance");
//     },
// }


// method shothand
const dogesh = {
    name: "Husky",
    dance() {
        console.log("Ichu Ichu dance");
    },
}


let user = {
    name: "kajal Bisht",
    age: 21,
    collage: "galgotiya university",
    passout: 2026,
    bf: "maa ka ladla",

    intro() {
        console.log(`Hello, my name is ${this.name}.`);
        console.log(`I am ${this.age} year old.`);
        console.log(`I am passed out from ${this.collage} in ${this.passout}.`);
        console.log(`My Bf is ${this.bf}.`);
    },
}

// user.intro()

let kajal = user;
user = null;

kajal.intro();

