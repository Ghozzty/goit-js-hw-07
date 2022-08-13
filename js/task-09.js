function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const bodyClass = document.body;

button.addEventListener('click', clickButton);

function clickButton (event) {
  colorName.textContent = getRandomHexColor();

  bodyClass.style.backgroundColor = `${colorName.textContent}`;
}


