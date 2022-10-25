import "./meyer-reset.css";
import "./style.css";
import removeMain from "./remove.js";
import createHome from "./createHome.js";
import createMenu from "./createMenu.js";
import createContact from "./createContact.js";

// loads home page on first website load

window.onload = createHome;

// selectors for the navigation

const home = document.querySelector(".home");
home.addEventListener("click", () => {
    removeMain();
    createHome();
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    removeMain();
    createMenu();
});

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
    removeMain();
    createContact();
});