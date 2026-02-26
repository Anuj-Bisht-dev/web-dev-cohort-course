console.log("testing testing 1 2 3");

// variable
var name = "alex";
console.log(name);

let val = 123;
console.log(val);

// constant
const address = "123, mangal bazar, bangluru";
console.log(address);

// condition

let age;
age = 18;

function Votting(age) {

    if (age <= 17) {
        console.log("you cannot vote!!");
    } else {
        console.log("you can vote!");
    }
}

Votting(age);

// javascript loops

// let loop
console.log("printing numbers upto 10");
for (let i = 1; i <= 10; i++) {
    console.log("number", i);
}

// for loop

// let fileSize = 102400,
//     downloadedFileSize = 0;



// while loop
function internetSpeedInKb() {
    return Math.random();
}

// real-life example (time taken to downloading 100mb file between 1kb to 1mb internet speed)
// while (fileSize > downloadedFileSize) {
//     console.log("filedownded");
//     downloadedFileSize += downloadedFileSize + internetSpeedInKb();
// }



// do while loop
let participantsNo = 0;
let pNames;

do{
    console.log("we are going to print names of volienters if anyone intrested ", pNames);
}while(participantsNo > 0);
