// code to be called to remove elements from the page

export default function removeMain() {
    const main = document.querySelector(".main");
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}