const user = {
    name: "himanshu",
    address: {
        full: "xyaz, magal bazar",
        zip: "110093",
    },
}


if (user.address) {
    if (user.address.city) {
        console.log(user.address.city);
    } else {
        console.log(user.address);
    }
}
else {
    console.log("none");
}


// logial and (returns first truthy and last falsy value)
// console.log(user.address.city && user.address);

// new syntax (optional channing ?.)
console.log(user.address?.zip);

// when to add - when we are not sure
