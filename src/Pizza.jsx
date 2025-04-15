import React from "react";

const pizzaData = [
  {
    id: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "img/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "img/margherita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "img/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "img/funghi.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "img/salamino.jpg",
    soldOut: true,
  },
  {
    id: 6,
    name: "Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "img/prosciutto.jpg",
    soldOut: false,
  },
];

const Pizza = () => {
  return (
    <div>
      <ul className="pizzas">
        {pizzaData.map(({ id, name, ingredients, price, photoName, soldOut }) => (
          <li className={`pizza ${soldOut ? "sold-out" : ""}`} key={id}>
            <div>
              <h2>{name}</h2>
              <p>{ingredients}</p>
              {/* <span>${price}</span> */}
              <img src={photoName} alt={`Pizza photo ${name}`} />
              <span>{soldOut ? "SOLD OUT" : `$${price}`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
``
export default Pizza;
