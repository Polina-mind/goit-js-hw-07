const nameInputRef = document.getElementById('name-input');
const nameLabelRef = document.getElementById('name-output');

nameInputRef.addEventListener('input', event => {
  nameLabelRef.textContent = event.target.value;
});

nameInputRef.addEventListener('input', event => {
  if (event.target.value === '') {
    nameLabelRef.textContent = 'незнакомец';
  }
});
