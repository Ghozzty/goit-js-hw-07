function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxWrapper = document.querySelector('#boxes');

const input = document.getElementsByTagName('input')[0];

const createButton = document.getElementsByTagName('button')[0];

const destroyButton = document.getElementsByTagName('button')[1];

let boxSize = 30;

boxWrapper.style.display = 'flex';
boxWrapper.style.flexWrap = 'wrap';
boxWrapper.style.alignItems = 'center';


function createBoxes(amount) {
  amount = input.value;

    for(let i = 0; i < amount; i+=1){
    
    const box = document.createElement('div');
  
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.margin = '10px';

    boxWrapper.appendChild(box);
    boxSize += 10;
    
  }
  
}


function destroyBoxes() {
  boxWrapper.innerHTML = '';
  input.value = '';
  boxSize = 30;
}

createButton.addEventListener('click', createBoxes);

destroyButton.addEventListener('click', destroyBoxes);

