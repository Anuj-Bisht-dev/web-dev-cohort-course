console.log(brewPotion("Healing Herbs", 3));
function brewPotion(ingredient, dose) {
  return `Brewing potion with ${ingredient} (x${dose})... Potion ready`;
}

const mixElixir = function (ingredient) {
  return `Mixing elexir with ${ingredient} `;
};


// no own 'this', no `arguments` object
const distilEssence = (ingredient) => {
  return `Mixing elexir with ${ingredient} `;
};

function oldBrewingLogs() {
  console.log("Type: ", typeof arguments);
  console.log("Is Array: ", Array.isArray(arguments));
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

// oldBrewingLogs("Sage", "Rosemary");

const arrowBrew = () => {
  try {
    console.log(arguments);
  } catch (e) {
    // console.log(e);
    console.log(e.message);
  }
};

// arrowBrew();
// console.log("Program continue");

// impure function (a function is set to pure when it doesn't effect any external values - mutation of external value)
let globalCount = 0;
function brewAndCount(name) {
  globalCount++;
}

// HOF - higher order function (takes a function as an argument or returns a function)
function anotherFunctionForClass(brewAndCount) {
  return function newBrew() {
    //do something
  };
}

//IIFE
//

//()()
// (function () {})()(() => {})();

const potionShop = (function () {
  let inventory = 0;

  return {
    brew() {
      inventory++;
      return `Brew potion #${inventory}`;
    },
    getStock() {
      return inventory;
    },
  };
})();

console.log(potionShop);
console.log(potionShop.brew());
console.log(potionShop.inventory);


function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();