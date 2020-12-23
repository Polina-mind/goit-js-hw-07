const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', inputSizeHandler);

function inputSizeHandler() {
  textRef.style.fontSize = `${inputRef.value}px`;
}
