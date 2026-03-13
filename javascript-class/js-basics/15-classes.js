class Circketer {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.matchplayed = 0;
        this.stamina = 100;
    }

    // class.prototype.introduce = function(){ // write ur code}
    introduction() {
        return (`${this.name} is the ${this.role} | matchesPlayed ${this.matchplayed} | stamina ${this.stamina} `);
    }
}

const player1 = new Circketer("SachinTendurkar", "batsman");
const player2 = new Circketer("mahi", "wickerKeeping");


console.log(player1.hasOwnProperty("name"));
console.log(typeof Circketer);


class Debutant {
    constructor(name) {
        this.name = name;

        this.walksOut = () => {
            return (`${this.name} is going for it's first debue`);
        }
    }
}

const debutant1 = new Debutant("jay");
const somethingHolds = debutant1.walksOut; // deteched function
// console.log(somethingHolds());

const debutant2 = new Debutant("raj");

console.log(debutant1.walksOut === debutant2.walksOut);
// both using same memory but treated diffrently 'cause of diff. ref



