const DarkModeBtn = document.getElementById("toggle-dark-mode");
DarkModeBtn.addEventListener("click", () => {
    const darkMode = document.body.classList.toggle("dark-mode");
    if (darkMode) {
        DarkModeBtn.textContent = "Toggle Light Mode";
    } else {
        DarkModeBtn.textContent = "Toggle Dark Mode";
    }
});

