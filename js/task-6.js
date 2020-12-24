const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(event) {
  if (event.target.textLength === Number(event.target.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
