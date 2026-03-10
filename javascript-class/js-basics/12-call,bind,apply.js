// used for share this ref
// call and apply => basic chef (needs kitchen)
// call uses a simple object, string as args and
// appy uses a simple obj, and a array in arguments

// bind => returns a new function
// they are used to over-write the default this

function cookDishes(ingredients, dish) {
    return (`${this.name} is using ${ingredients} ingredient and using ${dish}.`);
}

const ayanKitchen = { name: "ayan ji's kitchen" };
const guptaKitchen = { name: "gupta ji's kitchen" };

// using call
console.log(cookDishes.call(ayanKitchen, "chicken, rice and spices", "hedrabadi biryani"));


// using apply
const guptasOrder = ["mutton and spices", "mutton korma"];

console.log(cookDishes.apply(guptaKitchen, guptasOrder));


// example
let nums = [10, 29, 39, 40];
// console.log(Math.max(...nums));
console.log(Math.max.apply(null, nums));
// apply takes two value
// first @param - object that is will use as this object 
// second @param - the argument array 


// using bind
function sendOrder(location, status) {
    return (`${this.name} at ${location}: ${status}`);
}

dilevaryBoy = { name: "sharma's boy" };
//it returns a function so, we have to stored in variable and then call it
const bindReport = sendOrder.bind(dilevaryBoy, "delhi, mangal-bazar", "pick up");
console.log(bindReport());

// also can used it like that
// const bindReport = sendOrder.bind(dilevaryBoy, "delhi);
// console.log(bindReport( mangal-bazar", "pick up" ));
