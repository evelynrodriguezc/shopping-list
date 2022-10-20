
const form = document.querySelector("#form");
const button = document.querySelector("#submit-button");
const list  = document.querySelector("#list");
const price = form.price;
const name = form.name;

const productList = [];
const nodesItem = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    productList.push({ name: name.value, price: price.value });
    createItem(name.value, price.value); 
    cleanInputs();
});

function cleanInputs(){
    price.value = ""
    name.value = ""
}

function createItem(name, price) {
    const li = document.createElement("li");
    li.classList.add("list--item");
    
    li.innerHTML = `
        <span>${productList.length}</span>
        <div class="item--draggable" draggable="true" id="draggable-${productList.length}">
            <p>${name}</p>
            <p>${price}</p>
            <span>...</span>
        </div>
    `;

    nodesItem.push(li);
    list.appendChild(li);
    addEvents(li, productList.length);
}

function dragStart() {
    console.log("Start");
}

function dragOver() {
    /* console.log("Over"); */

}

function dragEnter() {
    /* console.log("Enter"); */

}

function dragLeave() {
    /* console.log("Leave"); */

}

function dragDrop() {
    /* console.log("Drop"); */

}


function addEvents(node, index) {
    const draggable = document.querySelector(`#draggable-${index}`);
    console.log(draggable);
    node.addEventListener("dragstart", dragStart);

    draggable.addEventListener("drop", dragDrop);
    draggable.addEventListener("dragover", dragOver);
    draggable.addEventListener("dragenter", dragEnter);
    draggable.addEventListener("dragleave", dragLeave);
}

