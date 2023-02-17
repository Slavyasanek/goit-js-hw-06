function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNum = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]')
const boxOutput = document.querySelector('#boxes');


const createBoxes = (amount) => {
  for (let i = 0, count = amount; i < count; i++) {
    console.log(amount);
    console.log('mew')
    let divBox = document.createElement('div');
    let curcolor = getRandomHexColor();
    divBox.style.backgroundColor = curcolor;
    divBox.style.width = "200px";
    divBox.style.height = "200px";
    return boxOutput.append(divBox);
  }
} 

console.log(btnCreate);

btnCreate.addEventListener('click', function(){createBoxes(inputNum.value)});