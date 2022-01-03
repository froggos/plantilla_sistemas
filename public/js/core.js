/** Efecto de todos los botones */

const button = document.querySelectorAll("button");
button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btn.blur();
    });
});

/** Barra lateral, botón alternador */

let toggler = document.querySelector(".sidebar-toggler") !== null;

let hidden_toggler = document.getElementById("btn-toggler");

hidden_toggler.addEventListener("click", function () {
    toggle();
});

if(toggler) {
    toggler = document.querySelector(".sidebar-toggler");
    toggler.addEventListener("click", function () {
        toggle();
    });
}
    
const toggle = () => {
    document.querySelector("body").classList.toggle("active");
}

let lastState = false;
const checkChange = () => {
    let body = document.querySelector("body");
    let state = window.matchMedia("(max-width: 768px)").matches;
    if (state != lastState) {
        if (state) {
            body.classList.toggle("active");
        } else {
            if (body.classList.contains("active")) {
                document.querySelector("body").classList.toggle("active");
            }
        }
        lastState = state;
    }
}

window.setInterval(checkChange, 150);