const button = document.querySelectorAll("button");
button.forEach(btn => {
    btn.addEventListener("click", (e) => {
        btn.blur();
    });
});