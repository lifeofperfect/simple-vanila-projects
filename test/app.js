btn = document.getElementById("click");
color = document.querySelector(".color");

colors = ["Red", "Green", "Yellow", "Pink", "Grey"];

btn.addEventListener("click", () => {
  let randomHex = colors[randomValue()];
  color.textContent = randomHex;
  document.body.style.backgroundColor = randomHex;
});

function randomValue() {
  return Math.floor(Math.random() * colors.length);
}
