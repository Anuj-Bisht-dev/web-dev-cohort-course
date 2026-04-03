const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function createAListItem() {
    if (input.value === "") {
        alert("Bhai kuch add toh kar le")
        return;
    }

    const createAList = document.createElement("li");
    const createARemoveBtn = document.createElement("button");
    createARemoveBtn.textContent = "Remove";
    createARemoveBtn.classList.add("delete");

    createAList.textContent = input.value;

    createARemoveBtn.addEventListener("click", () => {
        createAList.remove();
    });

    createAList.addEventListener("dblclick", () => {
        createAList.textContent = prompt();
        createAList.appendChild(createARemoveBtn);
    });

    createAList.appendChild(createARemoveBtn)
    list.appendChild(createAList);

    input.value = "";

}

addBtn.addEventListener("click", createAListItem)
