const tagContainer = document.querySelector(".tag-container");

const tagGenerator = document.querySelector(".tagger");

const createTag = () => {
    if(tagGenerator.value.trim() !== "") {
        let tag = document.createElement("li");
        let text = document.createTextNode(tagGenerator.value.trim());
        let remover = document.createElement("span");
        remover.innerHTML = "×";
        remover.className = "tag-remover";
        remover.setAttribute("data-item", tagGenerator.value.trim());
        remover.addEventListener("click", (e)=> {
            const number_attr = e.target.getAttribute("data-item");
            const data_id = document.querySelector("[data-item="+number_attr+"]");
            data_id.parentElement.remove();
        });
        tag.className = "tag";
        tag.appendChild(remover);
        tag.appendChild(text);
        tagContainer.appendChild(tag);
    }
}

tagGenerator.addEventListener("keyup", (evt) => {
    if (evt.keyCode === 13) {
        evt.preventDefault();
        createTag(evt);
        tagGenerator.value = "";
    }
});