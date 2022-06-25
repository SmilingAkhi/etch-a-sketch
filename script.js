"use strict";
let num = 30;
let size = num * num;
function createDiv() {
  const container = document.querySelector(".container");
  for (let i = 0; i < size; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    div.addEventListener("click", addBackground);

    container.appendChild(div);
  }
}
createDiv();

function addBackground() {
  this.classList.toggle("addBackground");
}
