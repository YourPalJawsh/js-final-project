// DOM
const canvas = document.querySelector("#canvas");
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorPicker = document.querySelector("#colorPicker");
const saveCol = document.querySelector("#saveCol");
const clearCol = document.querySelector("#clearCol");
const swatches = document.querySelector("#swatches");

let currentColor = colorPicker.value;
let favoriteColors = {};

// Event listeners
clearBtn.addEventListener("click", clearGrid);
colorPicker.addEventListener("input", (event) => changeColor(event));

saveCol.addEventListener("click", saveColor);
clearCol.addEventListener("click", clearColors);

// Save colors
function saveColor() {
    let objIndex = Object.keys(favoriteColors).length;
    favoriteColors[objIndex] = currentColor;
    console.log(favoriteColors);
    console.log(objIndex);
    createSwatch(objIndex);
}

// Clear saved colors
function clearColors() {
    favoriteColors = {};
    for (keys in favoriteColors){
        swatches.children.remove();
    }
}

// Create an element for the color swatch
function createSwatch(objIndex){
    let hexVal = favoriteColors[objIndex];
    let stringVal = String(hexVal);

    let swatch = document.createElement("button");
    swatch.id = `id-${stringVal.slice(1)}`;
    swatch.style.backgroundColor = hexVal;
    console.log(swatch.id);
    swatches.appendChild(swatch);
}

// Color picker
function changeColor(c) {
    currentColor = c.target.value;
    console.log(`Color changed to: ${c}`);
}

// Painting Pixels
function paint(p) {
    p.style.backgroundColor = currentColor;
    console.log(`Painted pixel: ${p.id}`);
}

// Render grid
function renderGrid() {
    for (let i = 0; i < 256; i++){
        let tempPix = makePixel(i);
        // console.log(tempPix);
        canvas.appendChild(tempPix);
    }
}

// create button elements (pixels)
function makePixel(i) {
    let pixel = document.createElement("button");
    pixel.id = `p${i+1}`;
    pixel.style.height = "35px";
    pixel.style.width = "35px";
    pixel.style.backgroundColor = "#FFFFFF";
    pixel.style.padding = "0";
    pixel.style.lineHeight = "0";
    pixel.style.border = "1px solid rgba(0, 0, 0, 0.5)";
    pixel.addEventListener("click", () => paint(pixel));
    return pixel;
}

// Clear grid
function clearGrid(){
    let askToClear = confirm("Are you sure you want to clear the canvas? This action cannot be undone.");
    if (askToClear) {
        canvas.innerHTML = "";
        console.clear();
        renderGrid();
    }
}

// Localstorage

// load art

// save art


