const textInputEl = document.querySelector("#validation-input");
textInputEl.addEventListener("blur", onChangeClass);
  
  function onChangeClass(event) {
  if (event.currentTarget.value.length === Number(textInputEl.dataset.length)) {
    if (textInputEl.classList.contains("invalid")) {
      textInputEl.classList.remove("invalid");
      textInputEl.classList.add("valid");
    };
    textInputEl.classList.add("valid");
    return;
    }
  if (textInputEl.classList.contains("valid")) {
      textInputEl.classList.remove("valid");
      textInputEl.classList.add("invalid");
    };
    textInputEl.classList.add("invalid");
}

