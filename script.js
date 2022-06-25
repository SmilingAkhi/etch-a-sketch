"use strict";
let num = 10;
// let size = num * num;
function createDiv(col) {
  const container = document.querySelector(".container");

  for (let i = 0; i < num; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    div.addEventListener("click", addBackground);
    container.appendChild(div);
  }
}
createDiv();

let column = 10;
function col() {
  for (let i = 0; i < column; i++) {
    const dive = document.createElement("div");
    dive.classList.add("dive");
    dive.addEventListener("click", addBackground);
    container.appendChild(dive);
  }
}
col();
function addBackground() {
  this.classList.toggle("addBackground");
}
