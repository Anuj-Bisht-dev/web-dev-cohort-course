function TataCar(chassisNumber, modelName) {

    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}

// by using prototype - created a function for a function (TataCar)
TataCar.prototype.status = function () {
    return (`#${this.chassisNumber}, ${this.modelName}, ${this.fuelLevel}`);
}

// uses new keyword - what new does ??
// ( used to create's a new obj instance )

// 1: it creates an empty obj
// 2: creates prototype
// 3: then bind this to the new obj
// 4: returns the obj 
const car1 = new TataCar("MB- 102", "classic-ventage");
const car2 = new TataCar("KR- 202", "Nexon");

console.log(car1.status());
console.log(car2.status());

// it uses the prototype of refrenced object so it doesn't create new object (but creates instance) - shared method



function greet(name) {
    return {
        name,
        greetings() {
            return (`hello ${this.name} greetings from us...`);
        }
    }
}

const greet1 = greet("ayan");
const greet2 = greet("gourav");

console.log(greet1.greetings());
console.log(greet2.greetings());

// here is looks similar but it creates new obj for each time used much memory (called factory functions)
