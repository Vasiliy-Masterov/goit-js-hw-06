const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", onChangeTextOutput);
  
function onChangeTextOutput(event) {
    if (event.currentTarget.value === "") {
       return textOutputEl.textContent = "Anonymous";
    }
  textOutputEl.textContent = event.currentTarget.value;
}
