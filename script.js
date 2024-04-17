const gridContainer = document.querySelector(".container");
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", () => getUserInput());

let rowSize = 16;
createGrid(rowSize);
function getUserInput() {
  rowSize = prompt("What size grid would you like to make?");
  gridContainer.textContent = "";
  if ((rowSize <= 100) && (rowSize > 0)) {
    createGrid(rowSize);
  } else {
    rowSize = prompt("sorry the number must be between 0 and 100, please enter a new value.");
  }
}

function createGrid(rowSize) {
  // Create each row container then iterate through them appending the cells
  for (let i = 1; i <= rowSize; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.toggle(".row_container");
    rowContainer.style.height = (100/rowSize) + "%";
    rowContainer.style.display = "flex";
    rowContainer.style.flexDirection = "row";
    for (let j = 1; j <= rowSize; j++) {
      const gridCell = document.createElement("div");
      gridCell.setAttribute("id", "gridCell");
      gridCell.style.width = (100/rowSize) + "%";
      gridCell.style.height = 100 + "%";
      gridCell.style.border = "solid 1px black";
      gridCell.style.backgroundColor = randomRGB();
      rowContainer.appendChild(gridCell);
    }
    gridContainer.appendChild(rowContainer);
  }
}
