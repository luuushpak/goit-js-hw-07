function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");

btnEl.addEventListener("click", changeColor);

function changeColor(event) {
  const newColor = getRandomHexColor();
  nameOfColor.textContent = newColor;
  document.body.style.backgroundColor = newColor;
}
