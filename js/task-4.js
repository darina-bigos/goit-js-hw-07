const form = document.querySelector('.login-form');

const emailInput = document.querySelector('input[name="email"]');
if (emailInput) {
  emailInput.autocomplete = 'username';
}

const passwordInput = document.querySelector('input[name="password"]');
if (passwordInput) {
  passwordInput.autocomplete = 'current-password';
}
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(info);

  if (info.email === '' || info.password === '') {
    return alert('All form fields must be filled in');
  }
  form.reset();

  console.log(info);
}
