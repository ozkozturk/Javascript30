// I will add clearAll and uncheckAll functions


const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];
//const clearAll = document.querySelector(".clear");
//const uncheckAll = document.querySelector(".uncheck");
function addItem(e) {
    e.preventDefault(); // It's gonna stop the page from reloading.
    const text = (this.querySelector("[name=item]")).value; //used "this" because we don't want to be globally selecting it
    const item = {
        text: text, // or we can use it writing just "text". ES6 allows us this usage
        done: false,
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items",  JSON.stringify(items));
    this.reset(); // to clean up the form
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked": ""}>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join("");
}

function toggleDone(e) {
    if (!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; // flip-flopping between true or false
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

/* function clearList() {

} */


addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
//clearAll.addEventListener("click", clearList);

populateList(items, itemsList);




