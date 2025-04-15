// DOM
const canvas = document.querySelector("#canvas");
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorPicker = document.querySelector("#colorPicker");

// for dev
const gridGen = document.querySelector("#gridGen");

let currentColor = colorPicker.value;

// Event listeners
clearBtn.addEventListener("click", clearGrid);
colorPicker.addEventListener("input", (event) => changeColor(event));
gridGen.addEventListener("click", renderGrid);


// Color picker
function changeColor(c){
    currentColor = c.target.value;
    console.log(`Color changed to: ${c}`);
}

// Painting Pixels
function paint(p){ 

}

// Render grid
function renderGrid(){
    for (let i = 0; i < 16; i++){
        let tempPix = makePixel(i);
        console.log(tempPix);
        document.getElementById("canvas").appendChild(tempPix);
    }
}

function makePixel(i){
    let pixel = document.createElement("button");
    pixel.id = `p${i}`;
    pixel.style.height = "40px";
    pixel.style.width = "40px";
    pixel.style.backgroundColor = "#FFFFFF";
    pixel.style.margin = "0px";
    pixel.style.padding = "0px";
    pixel.addEventListener("click", paint(pixel));
    return pixel;
}

// Clear grid
function clearGrid(){
    // add a prompt to ask the user if they are sure they want to clear
    // to prevent accidental clearing
    // "Are you sure you want to clear the canvas? This action cannot be undone."
}

// Localstorage

// load art

// save art


