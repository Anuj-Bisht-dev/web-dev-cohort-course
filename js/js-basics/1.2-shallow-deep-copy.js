const username = {
  phone: "iphone",
  age: {
    a: 40,
    b: {

    }
  }
}


// shallow copy 
const mycopy = username
const copyName = { ...username }
// copyName.age.a = 5;
mycopy.age.a = 5;
// here it changes the actual value where this reference we are using
console.log(username);


// deep copy
const exectCopy = structuredClone(username);
exectCopy.age.b = [10, 20, 30];

console.log(username);
console.log(exectCopy); //here the refrenced object doesn't changes
