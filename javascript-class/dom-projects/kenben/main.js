// const addBtn = document.querySelectorAll(".add-btn");
// addBtn.forEach((e) => {
//     e.addEventListener("click", () => {
//         const text = prompt("Enter the Task");

//         if (!text) return;

//         const task = document.createElement("div");
//         task.className = "task";
//         task.textContent = text;

//         task.setAttribute("draggable", true);

//         e.previousElementSibling.appendChild(task);

//     })
// }) 
// without event deligation

let draggedTask = null;
const columns = document.querySelectorAll(".column")

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
        const text = prompt("Enter the task");

        if (!text.trim()) return;

        const task = document.createElement("div");
        task.className = "task";
        task.textContent = text;

        task.setAttribute("draggable", true);

        e.target.previousElementSibling.appendChild(task);
    }
})

document.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("task")) {
        draggedTask = e.target;
        e.target.classList.add("dragging");
    };

    document.addEventListener("dragend", (e) => {
        if (e.target.classList.contains("task")) {
            e.target.classList.remove("dragging");
            draggedTask = null
        }
    })


    columns.forEach((col) => {

        col.addEventListener("dragover", (e) => {
            col.classList.add("drag-over"); // for addition ui only
            e.preventDefault(); // very imp. because browser blocks the dragging behaviour it blocks that blocking behaviour.
        })

        // for additional ui only not must
        col.addEventListener("dragleave", () => {
            col.classList.remove("drag-over");
        })

        col.addEventListener("drop", () => {
            col.classList.remove("drag-over"); // for additional ui only not must

            if (draggedTask) {
                col.querySelector(".tasks").appendChild(draggedTask);
            }
        })
    })
});

