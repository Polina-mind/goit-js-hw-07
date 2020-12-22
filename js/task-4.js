const counterValue = document.getElementById('value');
const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]',
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]',
);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
  counterValue.textContent -= 1;
}

function increment() {
  counterValue.textContent += 1;
}
