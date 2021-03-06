const nameInputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', nameLabelHandler);

function nameLabelHandler(event) {
  event.target.value === ''
    ? (nameLabelRef.textContent = 'незнакомец')
    : (nameLabelRef.textContent = event.target.value);
}
