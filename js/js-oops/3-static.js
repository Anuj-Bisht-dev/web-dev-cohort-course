// class MathUtils {
//     static add(a, b) {
//         return a + b;
//     }
// }
// static is define methods/properties that belong to class no need to create instances.
// console.log(MathUtils.add(2, 3));


// getter and setter
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        if (val.length < 3) {
            console.log("choota hai bhai bahut naam naam!");
            return;
        }
        this._name = val;
    }
}

const user1 = new User("salmoon khan");
// console.log(user1.name); // getter
// user1.name = "An";
// console.log(user1.name); // name = ankita

/*
class Bank {
    #balance = 0;

    deposite(amount) {
        this.#balance += amount;
    }

    balance() {
        return this.#balance;
    }
}

// cannot access #(private field) directly but can access indirectly (ex in methods/props)
const hdfc = new Bank();
// console.log(hdfc.#balance)// not allowed because of private field

hdfc.deposite(10_000); // balance = 10_000
console.log(hdfc.balance());
*/

// using setter and getter in upper class

class Bank {
    #balance = 0;

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            console.log("bhai kitni garibi hai yaar tumhare pass negative main balc hai..");
            return;
        }
        this.#balance += amount;
    }

}

const icic = new Bank();

console.log(icic.balance);

icic.balance = 200_000;
console.log(icic.balance);
