const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(event) {
  event.target.textLength === Number(event.target.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
