const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', event => {
  if (event.target.textLength === Number(event.target.dataset.length)) {
    event.target.id = 'validation-input.valid';
    //console.log(event);
  } else {
    event.target.id = 'validation-input.invalid';
    //console.log(event);
  }
});
