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

const makeList = values => {
  return values.map(ingredient => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = ingredient;
    return listItem;
  });
}

const vegies = makeList(ingredients);

list.append(...vegies);