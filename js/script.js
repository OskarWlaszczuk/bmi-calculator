{
    const displayResualts = (bmi) => {
        const resualtElemet = document.querySelector(".js-bmiResualts");

        resualtElemet.innerText = bmi.toFixed(2);
    };

    const calculateResualts = (weight, height) => {
        const bmi = weight / ((height / 100) ** 2);

        displayResualts(bmi);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const weight = document.querySelector(".js-weightField").value;
        const height = document.querySelector(".js-heightField").value;

        calculateResualts(weight, height);
    };

    const onFormReset = () => {
        const weightInputElement = document.querySelector(".js-weightField");
        const resualtElemet = document.querySelector(".js-bmiResualts");

        weightInputElement.focus();
        resualtElemet.innerText = "";
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    };

    init();
};