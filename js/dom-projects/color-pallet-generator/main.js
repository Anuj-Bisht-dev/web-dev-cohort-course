const tone = document.getElementById("tone");
const generateBtn = document.getElementById("generateBtn");
const palette = document.getElementById("palette");
const format = document.getElementById("format");

function randomRgb(tone) {
    let min = 0, max = 255;

    if (tone === "light") {
        min = 150, max = 255;
    }

    if (tone === "dark") {
        min = 0, max = 120;
    }

    let r = Math.floor(Math.random() * (max - min) + min);
    let g = Math.floor(Math.random() * (max - min) + min);
    let b = Math.floor(Math.random() * (max - min) + min);

    return { r, g, b };
}


function convertRgbToHex(r, g, b) {
    return ("#" + [r, g, b].map((e) => (e).toString(16).padStart(2, "0")).join(""));
}

function generatePallete() {
    palette.innerHTML = "";

    for (let i = 0; i <= 5; i++) {
        const { r, g, b } = randomRgb(tone.value);
        let color;

        if (format.value === "HEX") {
            color = convertRgbToHex(r, g, b);
        }
        else {
            color = `rgb(${r}, ${g}, ${b})`;
        }

        const span = document.createElement("span");
        span.classList.add("color");

        span.style.backgroundColor = color;
        span.textContent = color;

        palette.appendChild(span);
    }
}

generateBtn.addEventListener("click", generatePallete);

generatePallete();
