// part 1 ---------- selection time --------------

// id selection 
let header = document.getElementById("heading1");
console.log(header);

// class selection
let paraClasses = document.getElementsByClassName("para");
console.log(paraClasses);

// tags selection
let table = document.getElementsByTagName("table");
console.log(table);

// queryselection (use . and #)
console.log(
    document.querySelector(".para") // returns the first matching element
);

// querySelectorAll 
console.log(
    document.querySelectorAll(".para") // returns a array of elements
);


// what is a htmlCollection or a nodeList
/*
NodeList
-> collection of DOM Nodes - (elements, comment, text, etc..)
-> querySelectorAll()
-> contain .forEach()
-> mostly static
*/

/*
HTMLCollection
-> collection of HTML element Nodes only
-> getElementsByTagName(), getElementsByClassName
-> donot contain .forEach()
-> always live
*/


// part 2 ------------- Reading and changing content ------------

// .innerHTML = prints inner text and elements
// .innerText = prints only the text (do not show any hidden text)
// .innercontent = prints inner text even the hidden ones


// part 3 -------- Attributes ------------
// getAttribute("<attribName>")
// setAttribute("<attribName>", "<attribValue>")
// removeAttribute("<attribName>")
// toggleAttribute("<attribName>")


// part 4 ------------- styling ------------
// <element>.style.<styleName> = "<styleValue>"


// part 5 ----------- class Manipulation -------------
// <element>.classList.add(...<className>)
// <element>.classList.remove(...<className>)
// <element>.classList.toggle(...<className>)


// dark mode
const DarkModeBtn = document.getElementById("darkModeBtn");
DarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})