function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const valueColorEl = document.querySelector('.color');

buttonChangeEl.addEventListener('click', colorChange);

function colorChange () {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  valueColorEl.innerHTML = `${randomHexColor}`;
}