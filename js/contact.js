const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


// checking the correct value for each input
function validateForm() {

    //prevents default event action
    event.preventDefault();


// checking if the input value is 1 character or more
    if (checkLength(firstName.value, 0)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
// checking if the input value is 3 characters or more
    if (checkLength(lastName.value, 2)) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
// checking if the input value is a valid email address
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
// checking if the input value is 7 characters or more
    if (checkLength(subject.value, 6)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
// checking if the input value is 15 characters or more
    if (checkLength(message.value, 14)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

// runs the validateForm function when user submits
form.addEventListener("submit", validateForm);


// checking the length for the input value
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

// checking if input is a valid email address
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(email);
    return emailMatches;
}