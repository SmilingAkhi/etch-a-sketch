"use strict";

const container = document.querySelector(".container");
const resize = document.querySelector(".resize");

chnageSize();
function chnageSize() {
  resize.addEventListener("click", () => {
    const sizing = prompt("what size of grid do you want?");
    if (sizing) {
      container.innerHTML = "";
    }
    generateGrid(sizing);
  });
}

function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = createRow();
    for (let k = 0; k < size; k++) {
      col(row);
    }
  }
  function createRow() {
    let div = document.createElement("div");
    div.classList.add("divs");
    container.appendChild(div);
    return div;
  }

  function col(container) {
    let dive = document.createElement("div");
    dive.classList.add("dive");
    dive.addEventListener("click", addBackground);
    container.appendChild(dive);
  }

  function addBackground() {
    this.classList.toggle("addBackground");
  }
}
