"use strict";

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const getName = () => {
    if (event.currentTarget.value === "") {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = event.currentTarget.value;
    }
}

nameInput.addEventListener('input', getName);

