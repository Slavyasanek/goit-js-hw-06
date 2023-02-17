"use strict";

const inputValidation = document.querySelector('#validation-input');
const validateNum = inputValidation.dataset.length;
const checkValidation = () => {
    if (inputValidation.value.length >= validateNum) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.add('invalid');
        inputValidation.classList.remove('valid');
    }
}

inputValidation.addEventListener('blur', checkValidation)
