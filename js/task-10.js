"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]')
const boxOutput = document.querySelector('#boxes');



const createBoxes = (amount) => {
  let startSize = 30;
  if (boxOutput.innerHTML) {
    const lastBox = boxOutput.lastElementChild;
    startSize = Number.parseInt(lastBox.style.width) + 10;
    for (let i = 0; i < amount; i++) {
      const divBox = document.createElement('div');
      const currentColor = getRandomHexColor();
      divBox.style.backgroundColor = currentColor;
      divBox.style.width = `${startSize + 10 * i}px`;
      divBox.style.height = `${startSize + 10 * i}px`;
      boxOutput.append(divBox);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      const divBox = document.createElement('div');
      const currentColor = getRandomHexColor();
      divBox.style.backgroundColor = currentColor;
      divBox.style.width = `${startSize + 10 * i}px`;
      divBox.style.height = `${startSize + 10 * i}px`;
      boxOutput.append(divBox);
    }
  }
}

const destroyBoxes = () => {
  boxOutput.innerHTML = "";
}

btnCreate.addEventListener('click', () => createBoxes(inputNum.value));
btnDestroy.addEventListener("click", destroyBoxes);