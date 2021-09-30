const form = document.querySelector(".form-container");
const username = document.querySelector("#username");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm() {
    event.preventDefault();

    if (chechkLength(username.value, 0) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display ="none";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
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
