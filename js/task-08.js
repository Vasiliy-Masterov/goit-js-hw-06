const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
     email, password 
  } = event.currentTarget.elements;
  
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const credentials = {
    email:email.value,
    password: password.value,
  };
  console.log(credentials);
  event.currentTarget.reset();
}
