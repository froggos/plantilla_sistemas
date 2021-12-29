const tagContainer = document.querySelector(".tag-container");

const tagGenerator = document.querySelector(".tagger");

const createTag = (evt) => {
    let tag = document.createElement("li");
    let text = document.createTextNode(tagGenerator.value);
    let remover = document.createElement("span");
    remover.innerHTML = "×";
    remover.className = "tag-remover";
    remover.setAttribute("data-item", tagGenerator.value);
    remover.addEventListener("click", ()=> {
        
    });
    tag.className = "tag";
    tag.appendChild(remover);
    tag.appendChild(text);
    tagContainer.appendChild(tag);
}

tagGenerator.addEventListener("keyup", (evt) => {
    if (evt.keyCode === 13) {
        evt.preventDefault();
        createTag(evt);
        tagGenerator.value = "";
    }
});