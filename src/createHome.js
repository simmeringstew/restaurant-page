import Pizza from "./pizza.jpeg";
// file for creating the home page

export default function createHome() {
    const main = document.querySelector(".main");

    // title of home page
    const title = document.createElement("h1");
    title.textContent = "simmeringstew's simmeringstew";
    main.appendChild(title);

    // hours secttion
    const hours = document.createElement("div");
    hours.classList.add("hours");
    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";
    const hoursList = document.createElement("ul");

    const sunday = document.createElement("li");
    sunday.textContent = "Sunday: 1PM - 11PM";

    const monday = document.createElement("li");
    monday.textContent = "Closed";

    const tuesday = document.createElement("li");
    tuesday.textContent = "Tuesday: 5PM - 11PM";

    const wednesday = document.createElement("li");
    wednesday.textContent = "Wednesday: 5PM - 11PM";

    const thursday = document.createElement("li");
    thursday.textContent = "Thursday: 5PM - 11PM";

    const friday = document.createElement("li");
    friday.textContent = "Friday: 1PM - 11PM";

    const saturday = document.createElement("li");
    saturday.textContent = "Saturday: 1PM - 11PM";


    const daysOfWeek = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

    for (let i = 0; i < daysOfWeek.length; i++) {
        hoursList.appendChild(daysOfWeek[i]);
    }

    //appending items to hours
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursList);
    main.appendChild(hours);

    // creating location items
    const location = document.createElement("div");
    location.classList.add("location");
    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";
    const address = document.createElement("p");
    address.textContent = "123 Elf Road North Pole, 88888";

    // appending items to location
    location.appendChild(locationTitle);
    location.appendChild(address);
    main.appendChild(location);

    // creating review items
    const review = document.createElement("div");
    review.classList.add("review");
    const pizzaImage = new Image();
    pizzaImage.src = Pizza;
    const reviewText = document.createElement("p");
    reviewText.textContent = "This is the best restaurant ever. I think it is run by Santa since I had to travel all the way to the north poll to eat there, overall 5/5 I suppose.";

    // appending items to review
    review.appendChild(pizzaImage);
    review.appendChild(reviewText);
    main.appendChild(review);
}