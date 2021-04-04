const input = document.querySelector("input");

const divContainer = document.querySelector(".dynamic-divs");

const btn = document.querySelector(".reset");

// Making use of onchange event and target the input value
input.onchange = function() {

    const selectedValue = this.value;

    divContainer.innerHTML = "";

    // loops through selected input value and prints out the number of divs 
    for (let i = 0; i < selectedValue; i++) {
        divContainer.innerHTML += `<div>Number ${i+1}</div>`
    }
}

// removes all div elements and sets input value to 0
function resetBtn() {
    divContainer.innerHTML = "";
    input.value = 0;
}

btn.addEventListener("click", resetBtn);