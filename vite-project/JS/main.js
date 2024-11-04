import "../CSS/style.css";
import { GroceryItems } from "./products";
import { DOMSelectors } from "./DOMs";

function addCards() {
  GroceryItems.forEach((item) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
          <h3 class="headers centertext">${item.name}</h3>
          <img src="${item.image}" alt="" class="image" > 
          <h5>${item.price}</h5>
        </div>
      `
    );
  });
}
addCards();
