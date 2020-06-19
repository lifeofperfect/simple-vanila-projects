const colors = ["green", "yellow", "red", "pink", "orange", "cyan", "blue"];

const btn = document.getElementById("click");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomValue = createRandom();
  document.body.style.backgroundColor = colors[randomValue];
  color.textContent = colors[randomValue];
  console.log(randomValue);
});

function createRandom() {
  return Math.floor(Math.random() * colors.length);
}
