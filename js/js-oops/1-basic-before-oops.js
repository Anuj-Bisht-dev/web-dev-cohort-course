// const user1 = {
//     name: "kamaal haseen",
//     score: 90,
//     inc() {
//         this.score++;
//     }
// }

// const user2 = {
//     __proto__: user1,
// }

// const user2 = Object.create(user1); // same work internally as above

// user2.name = "arijit singh"; // created in user2

// user2.__proto__.name = "sonu shuet"; // created in user1

// firstly it checks in it own obj if not find
// then find on it's __proto__
// console.log(user2.name);

// prototype chain
// user2 --> user1 --> Object --> null


function User(name, score) {
    this.name = name;
    this.score = score;
}

User.prototype.increment = function () {
    return (this.score++);
}

const user1 = new User("suraj", 90);
const user2 = new User("jagriti", 40);

// console.log(user2.increment());

console.log(user1 === User);
console.log(user1 instanceof User);


// prototype v/s __proto__
// .prototype attached to --> constructor function (shows the props of c.f)
// __proto__ attached to --> object the we created with the help of C.F (shows the props of obj)

