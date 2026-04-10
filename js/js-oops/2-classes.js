class Person {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    increment() {
        return this.score++;
    }
}

const p1 = new Person("jay", 90);
p1.increment()
// console.log(p1.name, p1.score);

// console.log(typeof Person) // function


// inheritance
class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    logIn() {
        console.log("user is logged In");
    }
}

class Admin extends User {
    constructor(name, score, isAdmin) {
        super(name, score); // reference to parent class prototype
        this.isAdmin = isAdmin;
    }
    deleteUser() {
        console.log("you are fired");
    }
}

const admin1 = new Admin("nancy", 50, true);
console.log(admin1);

admin1.logIn();