// file for creating the contact page

export default function createHome() {
    const main = document.querySelector(".main");

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    main.appendChild(title);

    const contactArea = document.createElement("div");
    contactArea.classList.add("contact-area");

    const textArea = document.createElement("textarea");
    textArea.name = "contact";
    textArea.maxLength = "2000";
    textArea.classList.add("contact-box");
    textArea.cols = "80";
    textArea.rows = "20";

    const submitArea = document.createElement("div");
    submitArea.classList.add("submit-area");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.htmlFor = "email";
    const emailInput = document.createElement("input");
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.maxLength = "50";
    emailInput.classList.add("email-input");
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("submit-button");

    const submitItems = [emailLabel, emailInput, submitButton];

    for (let i = 0; i < submitItems.length; i++) {
        submitArea.appendChild(submitItems[i]);
    }

    contactArea.appendChild(textArea);
    contactArea.appendChild(submitArea);
    main.appendChild(contactArea);
}