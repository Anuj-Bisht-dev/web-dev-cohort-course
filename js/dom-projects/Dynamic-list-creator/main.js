const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

function createAListItem() {
    if (input.value === "") {
        alert("Bhai kuch add toh kar le");
        return;
    }

    const createAList = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("delete");

    span.textContent = input.value;

    deleteBtn.addEventListener("click", () => {
        createAList.remove();
    });

    createAList.appendChild(span);
    createAList.appendChild(deleteBtn);
    list.appendChild(createAList);

    input.value = "";

    createAList.addEventListener("dblclick", () => {

        const spanValue = span.innerText;
        const listInput = document.createElement("input");
        listInput.value = spanValue;
        createAList.replaceChild(listInput, span);

        listInput.addEventListener("focusout", () => {
            if (listInput.value.trim() === "") {
                alert("mitar kuch likh toh le..");
            }
            span.textContent = listInput.value;
            createAList.replaceChild(span, listInput);
        })

    })
};

addBtn.addEventListener("click", createAListItem)
