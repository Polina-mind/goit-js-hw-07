const inputRef = document.querySelector('num');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.getElementById('boxes');

// inputRef.addEventListener('input', event => {
//   //   amount = inputRef.target.value;
//   console.log(event);
// });

renderBtnRef.addEventListener(
  'input',
  //   createBoxesHandler,
  console.log('rkbr'),
);

destroyBtnRef.removeEventListener(
  'click',
  //   createBoxesHandler,
  console.log('yty'),
);

function createBoxesHandler(amount) {
  for (let i = 0; i < amount; i += 1) {
    let newDiv = document.createElement('div');

    newDiv.style.borderStyle = 'solid';
    newDiv.style.borderColor = 'green';
    newDiv.style.width = '30px';
    newDiv.style.height = '30px';

    boxesRef.appendChild(newDiv);

    console.log(newDiv);
  }
}
