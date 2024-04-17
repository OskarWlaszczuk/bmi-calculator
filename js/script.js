let formElement = document.querySelector(".js-form");
let weightInputElement = document.querySelector(".js-weightField");
let heightInputElement = document.querySelector(".js-heightField");
let resualtElemet = document.querySelector(".js-bmiResualts");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let weight = weightInputElement.value;
    let height = heightInputElement.value;
    let bmi = weight / ((height / 100) ** 2);

    resualtElemet.innerText = bmi.toFixed(2);

    formElement.reset();
    weightInputElement.focus();
});