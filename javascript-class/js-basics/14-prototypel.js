// the main use of prototype is inheritance 
const himanshu = {
    name: "himanshu",
    generation: "first-gen",
    teachingSkills() {
        return (`${this.name} teaches like a physician..`);
    }
};

// all above properties are inherit to this newly created object (all the inherit properties moves on in prototype)
const ron = Object.create(himanshu);
console.log(ron);
console.log(ron.name);

ron.name = "ron";
ron.generation = "second-gen";
ron.publicSpeaker = function () {
    return (`${this.name} is a good public speaker`);
}
console.log(ron); // all the created properties will shows on object


const alex = Object.create(ron);
alex.name = "alex";
alex.generation = "third-gen";
alex.musculeGenetics = function () {
    return (`${this.name} have very good muscles genitics.`);
}

// here it inherits all the properties
console.log(alex.musculeGenetics());
console.log(alex.publicSpeaker());
console.log(alex.teachingSkills());


// created our own prototype for array data-type
Array.prototype.last = function () {
    return this[this.length - 1];
}

console.log([1, 2, 3].last());
console.log(["sourav", "raj", "ayan"].last());

// can learn about more on polyphills if intrested...
