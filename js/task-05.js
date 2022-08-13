const taskData = {
    input: document.querySelector('#name-input'),
    stringText: document.querySelector('#name-output')
}

taskData.input.addEventListener('input', event => {

if (taskData.input.value !== '') {
return taskData.stringText.textContent = event.currentTarget.value;
}

return taskData.stringText.textContent = 'Anonymous';
}
);
