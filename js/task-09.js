"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorOutput = document.querySelector('.color')

const changeBcg = () => {
  let currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorOutput.textContent = currentColor;
}

btnChangeColor.addEventListener("click", changeBcg)