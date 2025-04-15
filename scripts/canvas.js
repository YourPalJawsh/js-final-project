// DOM
const canvas = document.querySelector("#canvas");
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorPicker = document.querySelector("#colorPicker");

let currentColor = colorPicker.value;

// Event listeners
clearBtn.addEventListener("click", clearGrid);
colorPicker.addEventListener("input", (event) => changeColor(event));

// Color picker
function changeColor(c){
    currentColor = c.target.value;
    console.log(`Color changed to: ${c}`);
}

// Painting Pixels
function paint(pixel){ 

}

// Render grid
function renderGrid(){
    
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


renderGrid();