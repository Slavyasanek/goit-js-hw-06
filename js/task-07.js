"use strict";

const inputSizeControl = document.querySelector('#font-size-control')
const textOutput = document.querySelector('#text');

const changeFontSize = () => {
    const fontValue = inputSizeControl.value;
    textOutput.style.fontSize = `${fontValue}px`;
}


inputSizeControl.addEventListener('input', changeFontSize)
