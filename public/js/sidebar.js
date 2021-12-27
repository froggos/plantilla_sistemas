let toggler = document.querySelector(".sidebar-toggler");

let hidden_toggler = document.getElementById("btn-toggler");

hidden_toggler.addEventListener("click", function () {
    toggle();
});

toggler.addEventListener("click", function () {
    toggle();
});

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

let btnClass = document.getElementsByClassName("btn-hdo");


window.setInterval(checkChange, 150);