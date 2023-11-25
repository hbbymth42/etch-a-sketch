const sketch = document.querySelector("#sketch-container");
const setGridButton = document.querySelector("button");

function resetGrid(){
    while (sketch.hasChildNodes()) {
        sketch.removeChild(sketch.firstChild);
    }
}

function setGrid(gridSize = 16) {
    if (isNaN(+gridSize)) {
        return alert("Please enter a valid number");
    }

    if (gridSize > 100) {
        return alert("Please enter a grid size under 100.");
    }

    resetGrid();
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', "width: " + (Math.round(900/(gridSize))).toString() + "px; height: " + (Math.round(900/(gridSize))).toString() + "px;");
        square.classList.add('square');
        square.addEventListener('mouseover', () => square.style.backgroundColor = "black", false);
        sketch.appendChild(square);
    }
}

setGrid();

setGridButton.addEventListener('click', () => setGrid(prompt("Grid Size? Under 100")));

