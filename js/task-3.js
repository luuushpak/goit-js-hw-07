const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", (event) => {
  const name = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() != "") {
    outputEl.textContent = name;
  } else outputEl.textContent = "Anonymous";
});
