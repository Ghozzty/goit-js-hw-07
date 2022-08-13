
const counterData = {
    counterValue: 0,
    counter: document.querySelector('#value'),
    incrBtn: document.querySelector('[data-action="increment"]'),
    decrBtn: document.querySelector('[data-action="decrement"]')
}



const incrBtnClick = event => {
  counterData.counterValue += 1;
  
  counterData.counter.textContent = counterData.counterValue;
}

const decrBtnClick = event => {
    counterData.counterValue -= 1;
    
    counterData.counter.textContent = counterData.counterValue;
  }

counterData.incrBtn.addEventListener('click', incrBtnClick);
counterData.decrBtn.addEventListener('click', decrBtnClick);
