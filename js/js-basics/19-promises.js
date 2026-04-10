// pending, fullfilled, reject

// be default in pending state
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("chaicode");
        reject(new Error("nahi chalega bhai error hai.."));
    }, 2000);
});

console.log(promise);
setTimeout(() => {
    console.log(promise);
}, 3000);
*/

// -------- using .then in diff. ways -----------

// promise.then((val) => {
//     console.log(val);
// });


// let myFun = (data) => {
//     console.log(data);
// }
// promise.then(myFun);

// promise.then(console.log); // it will works
// because .then takes the responsiblity of putting resolve value in the callback function
// and, console.log is a function.


// imp. (.then takes 2 para 1st for resolve and 2nd for error handling)
// promise.then(
//     (data) => { console.log(data) },
//     (err) => { console.log(err) },
// );

// same work as .then but we use .catch in newer workflows
// promise
// .then((data) => { console.log(data) })
// .then(console.log)
// .catch((err) => { console.log(err) });
// here, .then passes the error value to catch and it handles it


// practices not serious
/*
promise
    .then((data) => {
        let newData = data.toUpperCase();
        return newData;
    })
    .then((data) => {
        return data + ".com"
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
        return "ja bhai maje kar.."
    })
    .then(console.log);
*/


const turant = Promise.resolve("ChaiCode");
// console.log(turant);

const multiPromises = [
    Promise.reject("Error hai toh reject kiya..").catch((err) => err),

    Promise.resolve("chai").then((data) => data),
    Promise.resolve("code").then((data) => data),
]

// any - returns the first resolved promise value
// const anyPromise = Promise.any(multiPromises);
// anyPromise.then(console.log);

// all - all promise must be resolved and it returns there value in array
// const allPromise = Promise.all(multiPromises);
// allPromise.then(console.log);

// allSettled - return the state and values of all promises (resolve/reject)
// const allSettledPromise = Promise.allSettled(multiPromises);
// allSettledPromise.then(console.log);

// race - returns the first resolved/reject promise
// const racePromise = Promise.race(multiPromises);
// racePromise.then(console.log);


// await and async

// ------- for, resolve --------
/*
const hPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Masterji");
    }, 3000);
});
// hPromise.then(console.log);

async function nice() {
    const result = await hPromise;
    console.log(result);
}
nice();
*/


// --------- for, reject ----------
/*
const hPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("unable to complete the task"));
    }, 3000);
});
// hPromise.then(console.log);

async function nice() {
    try {
        const result = await hPromise;
        console.log(result);

    } catch (err) {
        // console.log(err);
        console.log(err.message);
    }
}
nice();
*/
