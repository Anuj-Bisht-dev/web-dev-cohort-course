// types of writing eventtListener
// inline. eventName, adEeventListener

// why need of eventName rather than inline
// cons: messay code, hard debugging, not scalable, not managable
// pros: faster. easy to add, not recommended approch

//---------------------------------------------------

// why need of addEventListener eventname were working fine
// pros: more managable than inline, can able to debugge, can scalable and not messey unlike inline
// cosn: one event at a time, when add another it over-write the previous one

// const btn = document.getElementById("btn");
// eventName's
/*
btn.onclick = function () {
    console.log("haloo swetty!");
}
    console.log("haloo swetty 2!");
*/

// ----------------------------------------------------

// addEventListener in the game buddy.....
/*
btn.addEventListener("click", () => {
    console.log("clicked 1");
});

btn.addEventListener("click", () => {
    console.log("clicked 2");
});

btn.addEventListener("click", () => {
    console.log("clicked 3");
});
*/


const body = document.body;
const parent = document.getElementById("parent");
const child = document.getElementById("child");
// syntax - addEventlListener(<event>, callback fnc, options)
// Event bubbling - when the event listener is propagates from child to ancestor element (down to up)
// the default value of option is false that's why the events are in bubbling phase

/*
body.addEventListener("click", () => {
    console.log("clicked on body");
}, false);

parent.addEventListener("click", () => {
    console.log("clicked on parent");
}, false);

child.addEventListener("click", () => {
    console.log("clicked on child");
}, false);
*/

// Event capturing - event listener approches grandparent to parent to child and so on.. (up to down)
// but for capturing phase the optional value is true
/*
body.addEventListener("click", () => {
    console.log("clicked on body");
}, true);

parent.addEventListener("click", () => {
    console.log("clicked on parent");
}, true);

child.addEventListener("click", () => {
    console.log("clicked on child");
}, true);


// bubbling phase 
parent.addEventListener("click", function () {
    console.log("parent clicked");
}, false);

child.addEventListener("click", function () {
    console.log("child clicked");
}, false);

// Event phase
// target phase, bubbling phase, capturing phase
// Event reaches the actual element that triggered it.
// target (always) triggers but capturing triggers on (true) and bubbling by (default or in false)
*/



parent.addEventListener("click", (event) => {
    console.log("bhai parent pe click kara hai..");
}, true) // when we use stopPropagation in capuring phase the bubbling phase will not work
// but using stopPrpagation in bubbling the capuring phase will work because it exicuted before than bubbling 
// according to the flow

child.addEventListener("click", (event) => {
    // event.stopImmediatePropagation(); // it stop the bubbling phase but also the other listener at same element
    event.stopPropagation(); // it stop the bubbling phase but not allow for same element (unlike stopImmediatePropagation)
    console.log("child pe click kiya hai.");
});

child.addEventListener("click", () => {
    console.log("bubble waha child clicked!z")
});



// ---------------------------------------
const eventContainer = document.querySelectorAll("li");
// eventContainer.forEach((ele) => {
// ele.addEventListener("click", () => {
// console.log(ele.textContent);
// });
// });
// it create multiple eventListeners ref for each ele (performance issues)

// Event Deligation - when we use single event listener on parent element to handle event of the child elements using event bubbling.
/*
const items = document.getElementById("event-container");
items.addEventListener("click", (event) => {
    // we uses [event and for hadling event] then [target to target the element] then [tagName on the basis (LI tags)]
    // then print the event targeted element textcontent we can do changes in the conditions to select the (element after the event.target)
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});
*/

// what happens in event- deligation step by step
// 1. first we click on <li>
// 2. event fires on li target (target phase)
// 3. then bubbling ups to <ul>
// 4. <ul> then listener runs - this is delegation

// 👉 Browser says:
// “Oh, this event reached <ul> and <ul> has a listener → run it”

// we can use <element>.closest("<selector>")
//👉 it returns the nearest ancestor (or the element itself) that matches a specified selector by traversing up the DOM tree.

const items = document.getElementById("event-container");
items.addEventListener("click", (e) => {
    if (e.target.closest(".event-child")) {
        console.log(e.target.textContent);
    }
});
// it works with closest very useful in event deligation and recommended also
// because the element selection runs under loop in somecases not recommended

// we can stop the default behaviour of elements like:
const anchor = document.getElementById("link");
anchor.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked but default behaviour is stopped lol..");
})
