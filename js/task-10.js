function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createButtonEl: document.querySelector("#controls [data-create]"),
  destroyButtonEl: document.querySelector("#controls [data-destroy]"),
  inputEl: document.querySelector("#controls input"),
  boxesEl: document.querySelector("#boxes"),
}

refs.createButtonEl.addEventListener('click', createBoxes);
refs.destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = refs.inputEl.value;
  const propertiesBoxes = [];
   
  for (let i = 0; i<amount; i+=1){
    const itemEl = document.createElement("div");
    const size =30+10*i;
    itemEl.style.width =`${size}px`;
    itemEl.style.height =`${size}px`;
    itemEl.style.backgroundColor = `${getRandomHexColor()}`;
    propertiesBoxes.push(itemEl);
  }
  refs.boxesEl.append(...propertiesBoxes);
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
}
