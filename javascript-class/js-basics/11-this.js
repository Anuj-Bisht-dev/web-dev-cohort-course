console.log(this);

function student() {
    return typeof this;
}

// console.log(student());

function studentWithNoScript() {
    // "use strict";
    return this;
}

// console.log(studentWithNoScript());

const SecondYearcollageStudent = {
    degree: "b.tech",
    year: 2,

    student1() {
        return (`degree of std: ${this.degree}, year of std: ${this.year}`);
    }
}

console.log(SecondYearcollageStudent.student1());

const schoolStudents = {
    class: 12,
    numOfSubj: ["maths", "physics", "chemistry", "ip", "english"],

    stdInfo() {
        this.numOfSubj.forEach((subjects) => {
            console.log(`class: ${this.class}, subject: ${subjects}`);
        })
    }
}

schoolStudents.stdInfo();


// a regular nested fun doesn't inherit this
const myCollage = {
    students: "lallu",
    studentPlacement() {
        console.log(`students does not get placement beacuse they are: ${this.students}`);

        function studentsGetPlaced() {
            console.log(`number of sudents placed: ${this.students}`);
        }
        studentsGetPlaced();

        const lalluStudents = () => {
            console.log(`number of sudents placed: ${this.students}`);
        }
        lalluStudents();
    }
}

myCollage.studentPlacement();


// deteched method - when we create a variable and stored a function refrence in it so, it deteched from it's object

const friends = {
    name: "ayan",
    party() {
        return (`${this.name} is giving a biryani party in eid`); greet2.greetings()
    }
}

const detechedParty = friends.party;

console.log(detechedParty());


