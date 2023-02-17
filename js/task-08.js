"use strict";

const loginForm = document.querySelector('.login-form');

const checkValidation = () => {
    event.preventDefault();
    const {elements: 
        { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert(`All fields must be completed!`);
    }
    if (email.value && password.value) {
        console.log(`Email is: ${email.value}. Password is: ${password.value}`);
    }
    event.currentTarget.reset();
}

loginForm.addEventListener('submit', checkValidation);
