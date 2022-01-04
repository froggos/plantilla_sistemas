let option = {
    animation: true,
    delay: 2000,
}

let toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map((toastEl) => {
    return new bootstrap.Toast(toastEl, option);
});

/** Ejemplo de uso en botón */

let toastTest = document.querySelector("#doToastSuccessBottom");

let toastTop = document.querySelector("#doToastSuccessTop");

const ShowToastBottom = () => {
    let toastHTML = document.getElementById("toastSuccessBottom");
    let toastElem = new bootstrap.Toast(toastHTML, option);
    toastElem.show();
}

const ShowToastTop = () => {
    let toastHTML = document.getElementById("toastSuccessTop");
    let toastElem = new bootstrap.Toast(toastHTML, option);
    toastElem.show();
}

toastTest.addEventListener("click", () => {
    ShowToastBottom();
});

toastTop.addEventListener("click", () => {
    ShowToastTop();
});



