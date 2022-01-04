const TagGenerator = (function () {
    const pattern = /^[a-zA-Z]+$/;

    const createTag = (input, container) => {
        const tag_container = document.getElementById(container);
        if (input.trim() !== "" && pattern.test(input.trim()) && tag_container) {
            let tag = document.createElement("li");
            let text = document.createTextNode(input.trim());
            let remover = document.createElement("span");
            remover.innerHTML = "×";
            remover.className = "tag-remover";
            remover.setAttribute("data-item", input.trim());
            remover.addEventListener("click", (e) => {
                const number_attr = e.target.getAttribute("data-item");
                const data_id = document.querySelector("[data-item=" + number_attr + "]");
                data_id.parentElement.remove();
            });
            tag.className = "tag";
            tag.appendChild(remover);
            tag.appendChild(text);
            tag_container.appendChild(tag);
        }
    }

    return {
        Generate: createTag
    }
})();

const generatorInputs = document.querySelectorAll("[plugin-reader=tag-gen]");
[...generatorInputs].forEach(input => {
    let container = input.getAttribute("for");
    input.addEventListener("keyup", (evt) => {
        if (evt.keyCode === 13) {
            evt.preventDefault();
            TagGenerator.Generate(input.value, container);
            input.value = "";
        }
    });
});