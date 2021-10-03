const form = document.querySelector(".form-container form");
const username = document.querySelector("#username");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passError = document.querySelector("#passError");

function validateForm() {
    event.preventDefault();
    if (chechkLength(username.value, 0) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display ="block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
	if (chechkLength(password.value, 0) === true) {
        passError.style.display = "none";
    }
    else {
        passError.style.display ="block";
    }
}

form.addEventListener("submit", validateForm)

function chechkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}