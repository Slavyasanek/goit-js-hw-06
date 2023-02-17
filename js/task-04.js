"use strict";

const decrBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const valueOutput = document.querySelector('#value');
let counterValue = 0;

const decrease = () => {
    counterValue-=1; 
    valueOutput.textContent = counterValue;
}

const increase = () => {
    counterValue +=1;
    valueOutput.textContent = counterValue;
}

decrBtn.addEventListener("click", decrease);
incBtn.addEventListener("click", increase)
