// closure - [closure is bundle of func runs with it's lexical enviornment and closure creates everytime the func created]

function myCompany() {
    function ca(name) {
        return (`Your Company Name Is ${name}`);
    }
    return ca;
}

const createACompany = myCompany();
let companyName = createACompany("zimbabe");

function enternal(name) {
    const guestName = name;
    let count = 0;

    function zomato() {
        console.log(`Welcome ${guestName}, from zomato`);
    }

    function sweggi() {
        if (count == 1) return;
        console.log(`Welcome ${guestName}, from sweggi`);
        count++;
    }

    // zomato();
    // sweggi();
    return {
        zomato,
        sweggi
    }
}

const kajol = enternal("kajol");
const sanjay = enternal("sanjay");

kajol.sweggi();
kajol.sweggi();
kajol.sweggi();

// useMemo() hook created 



// const cups = ["green", "blue", "red"];
// cups.map // using closure
