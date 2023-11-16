const formValidation = document.querySelector('form');
const error = document.querySelector('.display-error');

const isUpperCaseEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return true;
  }
  return false;
};

formValidation.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const validEmail = !isUpperCaseEmail(email);

  if (validEmail) {
    error.innerHTML = '';
    formValidation.submit();
    formValidation.reset();
  } else {
    error.style.color = 'red';
    error.innerHTML = 'Please Email should be in lowercase';
  }
});
