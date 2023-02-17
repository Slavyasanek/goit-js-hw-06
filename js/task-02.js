"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

// first variant

//  * const vegies = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join(""); 
// * list.innerHTML = vegies; 

// variant createElement

const vegies = ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  list.append(listItem);
});