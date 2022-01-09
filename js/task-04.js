let counterValue = 0;
const counterValueTextEl = document.querySelector('#counter #value');
const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
const decrementFn = () => { 
    counterValue -= 1;
    counterValueTextEl.textContent = counterValue;
};
const incrementFn = () => { 
    counterValue += 1;
    counterValueTextEl.textContent = counterValue;
};
decrementBtnEl.addEventListener("click", decrementFn);
incrementBtnEl.addEventListener("click", incrementFn);

