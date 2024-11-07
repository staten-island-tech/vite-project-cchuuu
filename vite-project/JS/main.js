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

function filterItems(type) {
  GroceryItems.filter((item) => item.type === type);
}

function changeThemes() {
  DOMSelectors.darkModeBtn.addEventListener("click", function () {
    if (document.body.classList.contains("lightmode")) {
      document.body.classList.add("darkmode");
      document.body.classList.remove("lightmode");
    }
  });
  DOMSelectors.lightModeBtn.addEventListener("click", function () {
    if (document.body.classList.contains("darkMode")) {
      document.body.classList.add("lightMode");
      document.body.classList.remove("darkMode");
    }
  });
}

addCards();
changeThemes();
