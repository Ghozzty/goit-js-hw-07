const input = document.querySelector('#validation-input');

const validLength = Number(input.dataset.length);


input.addEventListener('blur', event => {
    console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length === validLength) {
       if(input.classList.contains('invalid')){
        input.classList.replace('invalid', 'valid')
        return
       }  else {
        input.classList.add('valid');
       }
       return
    }

    if (input.classList.contains('valid')) {
        input.classList.replace('valid','invalid')
        return
       } else  
       input.classList.add('invalid');
       return
   
})


