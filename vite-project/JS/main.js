import "../CSS/style.css";
import { GroceryItems } from "./products";
import { DOMSelectors } from "./DOMs";

function addCards(items = GroceryItems) {
  DOMSelectors.container.innerHTML = "";
  items.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
          <h3 class="headers centertext">${item.name}</h3>
          <img src="${item.image}" alt="" class="image">
          <h5>${item.price}</h5>
        </div>
      `
    );
  });
}

function filterItems(type) {
  return GroceryItems.filter((item) => item.type === type);
}

function includeItems(type) {
  return GroceryItems.filter((item) => item.type.includes(type));
}

function changeThemes() {
  DOMSelectors.darkModeBtn.addEventListener("click", function () {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  });
  DOMSelectors.lightModeBtn.addEventListener("click", function () {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  });
}

function filterCategories() {
  addCards();

  DOMSelectors.fruitsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const fruits = filterItems("Fruit");
    addCards(fruits);
  });

  DOMSelectors.vegetablesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const vegetables = filterItems("Vegetable");
    addCards(vegetables);
  });

  DOMSelectors.meatBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const meat = includeItems("Meat");
    addCards(meat);
  });
}

filterCategories();
changeThemes();
