const inputRangeEl = document.querySelector("#font-size-control");
const textOutputEl = document.querySelector("#text");
textOutputEl.style.fontSize = "56px";

inputRangeEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  const size = event.currentTarget.value;
  textOutputEl.style.fontSize = `${size}px`;
}
