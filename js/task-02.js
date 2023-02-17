const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const vegies = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");
list.innerHTML = vegies;
