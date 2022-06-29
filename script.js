"use strict";

const resize = document.querySelector(".resize");

resize.addEventListener("click", () => {
  let size = 0;
  const sizing = prompt("what size do you want?");
  size = sizing;

  for (let i = 0; i < size; i++) {
    let row = createRow();
    for (let k = 0; k < size; k++) {
      col(row);
    }
  }
});
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

// function reset() {
//   div.classList.add("reset");
// }
