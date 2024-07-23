function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us";

  const contactInfo = document.createElement("p");
  contactInfo.textContent =
    "Email: info@restaurant.com \n Phone: 📞 123-456-7890";
  contactInfo.style.whiteSpace = "pre-line";

  const address = document.createElement("p");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "images/restaurant-location.png";
  restaurantLocation.alt = "Trattoria restaurant location";

  contact.appendChild(headline);
  contact.appendChild(contactInfo);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
