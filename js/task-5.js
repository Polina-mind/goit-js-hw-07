const nameInputRef = document.getElementById('name-input');
const nameLabelRef = document.getElementById('name-output');

nameInputRef.addEventListener('input', nameLabelHandler);

function nameLabelHandler(event) {
  event.target.value === ''
    ? (nameLabelRef.textContent = 'незнакомец')
    : (nameLabelRef.textContent = event.target.value);
}
