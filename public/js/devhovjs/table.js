const items = [
    "Carta 1",
    "Carta 2",
    "Carta 3",
];

const list = document.getElementById("list");
const page_elem = document.getElementById("pagination");

let current_page = 1;
let rows = 2;

function DisplayList (items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    for (let i = 0; i < paginatedItems.length; i++) {
        let item = items[i];
        let item_element = document.createElement("div");
        item_element.classList.add("card");
        item_element.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${item}</h5>
                <p class="card-text">Texto de ejemplo de carta, descripción
                    breve.</p>
                <a href="#" class="btn btn-primary">Ir a inicio</a>
            </div>`;
        wrapper.appendChild(item_element);
    }
}

DisplayList(items, list, rows, current_page);