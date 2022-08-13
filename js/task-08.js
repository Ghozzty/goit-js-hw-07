
const form = document.querySelector('.login-form');

form.addEventListener('submit', submitFunc);

function submitFunc(event) {
    event.preventDefault();

    const {
        elements: { password, email }
      } = event.currentTarget;

      if (password.value === "" || email.value === "") {
        return alert('please fill the form');
      };
     
    
      console.log({
        [email.name]: email.value,
        [password.name]: password.value
        });

      event.currentTarget.reset();
}