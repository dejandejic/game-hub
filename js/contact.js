const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");


function validateForm(){
    event.preventDefault();


    if(chechkLength(firstName.value, 0) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }
    if(chechkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    if(chechkLength(adress.value, 24) === true) {
        subjectError.style.display = "none";
    }
    else {
        adressError.style.display = "block";
    }
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }
    //console.log("test");
}

form.addEventListener("submit", validateForm)

function chechkLength(value, len) {
    if(value.trim().length > len) {
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