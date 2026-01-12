const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleBtnSubmit);

function handleBtnSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email;
  const password = event.target.elements.password;
  const emailValueTrim = email.value.trim();
  const passwordValueTrim = password.value.trim();
  const form = event.target;
  if (emailValueTrim === "" || passwordValueTrim === "") {
    alert("All form fields must be filled in");
    return;
  }
  const dataObj = {
    [email.name]: emailValueTrim,
    [password.name]: passwordValueTrim,
  };
  console.log(dataObj);

  form.reset();
}
