const input = document.querySelector('#font-size-control');

const text = document.querySelector('#text');


input.addEventListener('input', (event) => {
   
    return text.style.fontSize = `${String(event.currentTarget.value)}px`;

}
);