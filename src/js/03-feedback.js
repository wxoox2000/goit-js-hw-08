const throttle = require('lodash.throttle');

const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const {
  elements: { email, message },
} = form;
form.addEventListener('input', throttle(handleInput, 500));
function handleInput() {
  let formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}
const storageData = JSON.parse(localStorage.getItem(FORM_KEY));
if (storageData === null) {
  email.value = '';
  message.value = '';
} else {
  try {
    email.value = storageData.email;
    message.value = storageData.message;
  } catch (error) {
    console.log(error.message);
  }
}
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
  evt.preventDefault();
  if (!email.value || !message.value) {
    alert('You must fill in all fields!!');
    return;
  }
  let formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.removeItem(FORM_KEY);
  evt.currentTarget.reset();
  console.log(formData);
}
