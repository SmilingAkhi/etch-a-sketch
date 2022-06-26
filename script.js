"use strict";

let num = 30;
for (let i = 0; i < num; i++) {
  let row = createRow();
  for (let k = 0; k < num; k++) {
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
