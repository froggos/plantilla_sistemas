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

const button = document.querySelectorAll("button");
button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btn.blur();
    });
});

const tagContainer = document.querySelector(".tag-container");
const buttonsClass = document.getElementsByTagName("button");
for (let i = 0; i < buttonsClass.length; i++) {
    let button = buttonsClass[i];
    if (button.classList.contains("tag-generator")) {
        button.addEventListener("click", (e) => {
            let tag = document.createElement("li");
            let text = document.createTextNode(e.target.value);
            tag.className = "tag";
            tag.innerHTML = `<span class="tag-remover">×</span>`;
            tag.appendChild(text);
            tagContainer.appendChild(tag);
        });
    }
}

// const tagSelect = document.querySelector(".tag-selector");
// const tagContainer = document.querySelector(".tag-container");
// tagSelect.addEventListener("change", (e) => {
//     let tag = document.createElement("li");
//     let text = document.createTextNode(e.target.value);
//     tag.innerHTML = `<span>×</span>`;
//     tag.appendChild(text);
//     tagContainer.appendChild(tag);
// });

window.setInterval(checkChange, 150);