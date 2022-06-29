"use strict";
/*
what i did was create a function that generate 
a grid and takes the size as anargument then created another function that changes the sitze ,
 and said function uses the
  generated grid function to clear the previous grid and generate a new one.

*/

function chnageSize() {
  // generateGrid(0);
  const resize = document.querySelector(".resize");
  resize.addEventListener("click", () => {
    const sizing = prompt("what size of grid do you want?");
    if (sizing) {
      // generateGrid().remove();
      generateGrid();
      generateGrid(sizing);
    }
  });
}
chnageSize();
function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = createRow();
    for (let k = 0; k < size; k++) {
      col(row);
    }
  }
  function createRow() {
    const container = document.querySelector(".container");
    const div = document.createElement("div");
    div.classList.add("divs");
    container.appendChild(div);
    return div;
  }

  function col(container) {
    const dive = document.createElement("div");
    dive.classList.add("dive");
    dive.addEventListener("click", addBackground);
    container.appendChild(dive);
  }

  function addBackground() {
    this.classList.toggle("addBackground");
  }
}
// generateGrid(20);
