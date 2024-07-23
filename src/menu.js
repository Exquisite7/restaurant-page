function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
      "images/food/salsiccia.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil",
      "images/food/gamberi.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil",
      "images/food/pepe.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil",
      "images/food/disgustoso.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil",
      "images/food/colorato.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli",
      "images/food/pomodoro.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil",
      "images/food/crema.png"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli",
      "images/food/carne.png" 
    )
  );

  return menu;
}

function createMenuItem(name, description, imgsrc) {
  console.log("sss", imgsrc)
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = imgsrc;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;