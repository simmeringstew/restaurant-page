import Eggs from "./eggs.jpeg";
import Pancakes from "./pancakes.jpeg";
import Pizza from "./pizza.jpeg";
import Salmon from "./salmon.jpeg";

// file for creating the menu page
export default function createMenu() {
    const main = document.querySelector(".main");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    main.appendChild(title);

    const menu = document.createElement("div");
    menu.classList.add("menu-list");

    const eggsImage = new Image();
    eggsImage.src = Eggs;
    const eggsTitle = document.createElement("h2");
    eggsTitle.textContent = "Eggs";
    const eggsText = document.createElement("p");
    eggsText.textContent = "Enjoy this delicious egg, meat, and other sides dish";

    const pancakesImage = new Image();
    pancakesImage.src = Pancakes;
    const pancakesTitle = document.createElement("h2");
    pancakesTitle.textContent = "Pancakes";
    const pancakesText = document.createElement("p");
    pancakesText.textContent = "Buttermilk pancakes with real Canadian maple syrup and fresh fruit of your choosing";

    const pizzaImage = new Image();
    pizzaImage.src = Pizza;
    const pizzaTitle = document.createElement("h2");
    pizzaTitle.textContent = "Pizza";
    const pizzaText = document.createElement("p");
    pizzaText.textContent = "Wood fire pizza with fresh basil, sundried tomatoes, and mozzarella";

    const salmonImage = new Image();
    salmonImage.src = Salmon;
    const salmonTitle = document.createElement("h2");
    salmonTitle.textContent = "Salmon";
    const salmonText = document.createElement("p");
    salmonText.textContent = "Smoked salmon appetizers with cream and chives";

    // appending items to the menu
    const menuItems = [eggsImage, eggsTitle, eggsText, pancakesImage, pancakesTitle, pancakesText, pizzaImage, pizzaTitle, pizzaText, salmonImage, salmonTitle, salmonText]; 
    
    for (let i = 0; i < menuItems.length; i++) {
        menu.appendChild(menuItems[i]);1
    }

    main.appendChild(menu);
}